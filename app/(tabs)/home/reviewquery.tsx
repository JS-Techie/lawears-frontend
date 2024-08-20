import { Text, View, ScrollView, useWindowDimensions } from 'react-native'
import { Button, Card, List, TextInput, Checkbox } from 'react-native-paper'
import React, { useEffect } from 'react'
import { useState } from 'react'
import * as DocumentPicker from 'expo-document-picker'
import { Link } from 'expo-router'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

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

const reviewquery = () => {
  
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  const [queryTypeExpanded, setQueryTypeExpanded] = useState(false);
  const [uploadedFilesExpanded, setUploadedFilesExpanded] = useState(true);
  const  [selectedQueryType, setSelectedQueryType] = useState<string[]>(["Identity Theft"]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles[]>([
    {
      id : 1,
      file: {
        "mimeType": "image/jpeg",
        "name": "IMG-20240811-WA0000.jpg",
        "size": 114773,
        "uri": "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/c81ba015-7619-4335-8d3e-b9a0c4e0e9a7.jpg"
      }
    },
    {
      id: 2,
      file:  {
        "mimeType": "image/png",
        "name": "Screenshot_20240810-020232.png",
        "size": 380078,
        "uri": "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/d1a3cee8-d8c7-438c-b3ae-55b0c220c7f4.png"
       }
    },
    {
      id: 3,
      file:  {
        "mimeType": "image/png",
        "name": "Screenshot_20240810-020232.png",
        "size": 380078,
        "uri": "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/d1a3cee8-d8c7-438c-b3ae-55b0c220c7f4.png"
     }
    }
  ])
  

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
            <Text className='text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>Review your query and make </Text>
            <Text className='text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>any changes if needed </Text>
        </View>
        <View className={`max-h-[20%] ${queryTypeExpanded ? 'mb-[13%]' : 'mb-[5%]'}`}>
            <Text className='text-Neutral-6 font-cmedium pb-[2%]' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Legal query type</Text>
            <List.Accordion
              title= {selectedQueryType.length === 0 ? <Text className='text-Neutral-7' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Select legal query category/s</Text> : <Text className='text-primary-foreground pl-1' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>{selectedQueryType.join(", ")}</Text>}
              expanded={queryTypeExpanded}
              onPress={() => {setQueryTypeExpanded(!queryTypeExpanded)}}>
              <ScrollView className='max-h-[70%] '>
                {QueryType.map((type) => (
                  <Text
                    key={type.id}
                    className='py-[5%] text-Neutral-2 font-cmedium pl-[5%]'
                    style={{fontSize: Math.round(fontScaledSizeRatio*11)}}
                    // onPress={() => {setSelectedQueryType((prev) => [...prev, type.title]); setQueryTypeExpanded(!queryTypeExpanded)}}
                  >{type.title}</Text>
                ))}
              </ScrollView>
            </List.Accordion>
        </View>
        <View className='flex h-[15%] justify-between mb-[10%] '>
          <Text className='text-Neutral-6 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Your query</Text>
          <TextInput multiline placeholder='Type your legal query here' style={{height:'80%', fontSize: Math.round(fontScaledSizeRatio*11)}} className='rounded-lg' >I am facing an Issue regarding Identity Theft.</TextInput>
        </View>

        <View className=' max-h-[20%] mb-[10%]'>
          <List.Accordion
            title= {<Text className='text-Neutral-5 font-cbold' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Documents Uploaded - {uploadedFiles.length}</Text>}
            expanded={uploadedFilesExpanded}
            onPress={()=> {setUploadedFilesExpanded(true)}}>
            <ScrollView className='max-h-[70%] '>
              {uploadedFiles.map((eachFile) => (
                <View key={eachFile.id} className='flex-row py-[2%] pl-[5%] justify-between items-center'>
                  <Text className='text-Neutral-2 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>{eachFile.file.name}</Text>
                  <Button className='h-[120%] w-[20%] pt-[2%]'>
                    {/* <CloseIcon height={13} width={13} /> */}.
                  </Button>
                </View>
              ))}
            </ScrollView>
          </List.Accordion>
        </View>

        <View className="flex-row items-center justify-start w-full h-[5%]">
          <View className=" justify-start items-center w-[5%]">
            <Checkbox status={'checked'} color='#008847'/>
          </View>
          <Text className="font-c ml-[3%]" style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>I agree to the Terms & Conditions</Text>
        </View>

        <View className="h-[10%] justify-end items-center">
          <Button mode='contained' className='w-full h-[65%] items-center justify-center' labelStyle={{fontSize: Math.round(fontScaledSizeRatio*11), fontFamily: 'Caros-Medium' }}>
            <Link href={'/(tabs)/home/startconsultancy'}>
              Proceed to pay
            </Link>
          </Button>
        </View>

      </View> 
    </View>
  )
}

export default reviewquery