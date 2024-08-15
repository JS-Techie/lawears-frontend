
import { Text, View, ScrollView } from 'react-native'
import { Button, Card, List, TextInput } from 'react-native-paper'
import React, { useEffect } from 'react'
import { useState } from 'react'
import * as DocumentPicker from 'expo-document-picker'
import { Link } from 'expo-router'

import CloseIcon from '../../../assets/logo/VectorcloseButton.svg'

interface DocumentPickerType{
  "mimeType": string,
  "name": string,
  "size": number,
  "uri": string
}

interface UploadedFiles{
  'id':number, 
  'file': DocumentPickerType
}

const query = () => {
  const [queryTypeExpanded, setQueryTypeExpanded] = useState(false);
  const [uploadedFilesExpanded, setUploadedFilesExpanded] = useState(false);
  const  [selectedQueryType, setSelectedQueryType] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles[]>([])
  

  const QueryType = [
    { id: 1, title: 'Identity Theft' },
    { id: 2, title: 'Land Dispute' },
    { id: 3, title: 'Environmental' },
    { id: 4, title: 'Civil' },
    { id: 5, title: 'Criminal' },
    { id: 6, title: 'Theft' },
    { id: 7, title: 'Customary' },
    { id: 8, title: 'Religious' }
  ]

  const fileUploadHandler = async() => {
    try{
      const file = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: true,
        copyToCacheDirectory: true
      });

      if (file.assets != null){
          setUploadedFiles((prev) => {
            let fileId = 0;
            prev.length != 0 ? fileId = prev[prev.length -1].id : fileId = 0;
            const dogtaggedUploadedFiles = file.assets.map((asset) => ({
                id: fileId+1,
                file: asset
              })
            )
            return [...prev, ...dogtaggedUploadedFiles as UploadedFiles[]]

          })
      }
    }catch(error){
        console.log(error)
    }
  }

  const fileDeletionHandler = (fileId: number) => {
    setUploadedFiles(uploadedFiles.filter((file)=> file.id != fileId))
  }

  return (
    <View className='bg-white h-[100%] items-center'>
      <View className='w-[85%] h-[100%]'>
        <View className={`h-[15%] justify-center items-center ${queryTypeExpanded || uploadedFilesExpanded ? 'mb-[1%]' : 'mb-[5%]'}`}>
            <Text className='text-3xl text-Neutral-1 font-cmedium'>We need a few things from you </Text>
            <Text className='text-3xl text-Neutral-1 font-cmedium'>before we can match you </Text>
            <Text className='text-3xl text-Neutral-1 font-cmedium'>with a legal expert</Text>
        </View>
        <View className={`max-h-[20%] ${queryTypeExpanded ? 'mb-[13%]' : 'mb-[5%]'}`}>
            <Text className='text-base text-Neutral-6 font-cmedium pb-2'>Legal query type</Text>
            <List.Accordion
              title= {selectedQueryType.length === 0 ? <Text className='text-Neutral-7'>Select legal query category/s</Text> : <Text className='text-primary-foreground pl-1'>{selectedQueryType.join(", ")}</Text>}
              expanded={queryTypeExpanded}
              onPress={() => {setQueryTypeExpanded(!queryTypeExpanded); setUploadedFilesExpanded(false)}}>
              <ScrollView className='max-h-[70%] '>
                {QueryType.map((type) => (
                  <Text
                    key={type.id}
                    className='py-[5%] text-lg text-Neutral-2 font-cmedium pl-[5%]'
                    onPress={() => {setSelectedQueryType((prev) => [...prev, type.title]); setQueryTypeExpanded(!queryTypeExpanded)}}
                  >{type.title}</Text>
                ))}
              </ScrollView>
            </List.Accordion>
        </View>
        <View className='flex h-[15%] justify-between mb-[10%] '>
          <Text className='text-base text-Neutral-6 font-cmedium'>Your query</Text>
          <TextInput multiline placeholder='Type your legal query here' style={{height:'80%'}} className='rounded-lg'></TextInput>
        </View>

        <Card className='h-[20%] bg-Neutral-10 rounded-lg shadow-none justify-center items-center border-dashed border-2 border-Neutral-8 mb-[1%]'>
         <View className=' h-[80%] justify-evenly items-center'>
            <Text className='text-xl text-Neutral-7 font-cmedium'>
              Upload any required file or document
            </Text>
            <Button mode='outlined' className='w-[50%] h-[40%] items-center justify-center' icon={'upload'} onPress={fileUploadHandler}>
              <Text className='font-cbold text-xl'>Browse</Text>
            </Button>
         </View>
        </Card>


        {
        uploadedFiles.length > 0 &&
          <View className=' max-h-[20%]'>
            <List.Accordion
              title= {<Text className='text-Neutral-5 text-lg font-cbold'>Documents Uploaded - {uploadedFiles.length}</Text>}
              expanded={uploadedFilesExpanded}
              onPress={()=> {setUploadedFilesExpanded(!uploadedFilesExpanded); setQueryTypeExpanded(false)}}>
              <ScrollView className='max-h-[70%] '>
                {uploadedFiles.map((eachFile) => (
                  <View key={eachFile.id} className='flex-row py-[2%] pl-[5%] justify-between items-center'>
                    <Text className=' text-lg text-Neutral-2 font-cmedium '>{eachFile.file.name}</Text>
                    <Button className='h-[120%] w-[20%] pt-[2%]' onPress={() => {console.log("TOUCHED DELTE");fileDeletionHandler(eachFile.id)}}>
                      <CloseIcon height={13} width={13} />
                    </Button>
                  </View>
                ))}
              </ScrollView>
            </List.Accordion>
          </View>
        }

        <View className="h-[10%] justify-end items-center">
          <Button mode='contained' className='w-full h-[60%] items-center justify-center' labelStyle={{ fontSize: 19, fontFamily: 'Caros-Medium' }}>
            <Link href={'/(tabs)/home/reviewquery'}>
              Review query
            </Link>
          </Button>
        </View>

      </View> 
    </View>
  )
}

export default query