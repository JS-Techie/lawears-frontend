import { Text, View, ScrollView, useWindowDimensions } from 'react-native'
import { Button, Card, List, TextInput, Checkbox } from 'react-native-paper'
import React, { useEffect } from 'react'
import { useState } from 'react'
import * as DocumentPicker from 'expo-document-picker'
import { useRouter } from 'expo-router'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

import { useQueryStore } from '@/stores/query'
import { queryTypeInterface, queryApi, query } from '@/interfaces/query'
import { fileUploadType } from '@/interfaces/fileUpload'
import { createRecord } from '@/api/authenticated/query'

const reviewquery = () => {
  
  const router = useRouter();
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  const [queryTypeExpanded, setQueryTypeExpanded] = useState(false);
  const [uploadedFilesExpanded, setUploadedFilesExpanded] = useState(true);
  const savedQuery = useQueryStore((state : any) => state.query);
  const [selectedQueryType, setSelectedQueryType] = useState<queryTypeInterface[]>(savedQuery.query_types);
  const [uploadedFiles, setUploadedFiles] = useState<fileUploadType[]>(savedQuery.documents)
  const [queryDescription, setQueryDescription] = useState<string>(savedQuery.description)
  

  const handleQuerySubmission = async() => {

    const structuredQuery : queryApi = {
      name : savedQuery.name,
      query_types : selectedQueryType.map((item : queryTypeInterface) => item.id),
      // documents : uploadedFiles,
      documents : [],
      description : queryDescription
    }

    console.log("THE STRUCTURED QUERY :::: ", structuredQuery)
    // const [response, status] =  await createRecord(structuredQuery);
    const response = {status : 200}
    const status = true
    console.log("THE RESPONSE ::: ", response)
    console.log("THE STTUS ::: ", status)
    
    if(status) {
      console.log("HERER INSIDE OK STATUS")
      if(response && response.status === 200)
        router.push('/(tabs)/home/startconsultancy')
    }
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
              title= {selectedQueryType.length === 0 ? <Text className='text-Neutral-7' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Select legal query category/s</Text> : <Text className='text-primary-foreground pl-1' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>{selectedQueryType.map(item => item.title).join(", ")}</Text>}
              expanded={queryTypeExpanded}
              >.
            </List.Accordion>
        </View>
        <View className='flex h-[15%] justify-between mb-[10%] '>
          <Text className='text-Neutral-6 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Your query</Text>
          <TextInput multiline placeholder='Type your legal query here' value={queryDescription} style={{height:'80%', fontSize: Math.round(fontScaledSizeRatio*11)}} className='rounded-lg'/>
        </View>

        <View className=' max-h-[20%] mb-[10%]'>
          <List.Accordion
            title= {<Text className='text-Neutral-5 font-cbold' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Documents Uploaded - {uploadedFiles.length}</Text>}
            expanded={uploadedFilesExpanded}
            onPress={()=> {setUploadedFilesExpanded(true)}}>
            <ScrollView className='max-h-[70%] '>
              {uploadedFiles.map((eachFile) => (
                <View className='flex-row py-[2%] pl-[5%] justify-between items-center'>
                  <Text className='text-Neutral-2 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>{eachFile.name}</Text>
                  <Button className='h-[120%] w-[20%] pt-[2%]'>.
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
          <Button 
            mode='contained'
            className='w-full h-[65%] items-center justify-center'
            labelStyle={{fontSize: Math.round(fontScaledSizeRatio*11), fontFamily: 'Caros-Medium' }}
            onPress={handleQuerySubmission}
            >
              Proceed to pay
          </Button>
        </View>

      </View> 
    </View>
  )
}

export default reviewquery