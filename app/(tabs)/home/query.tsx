
import { Text, View, ScrollView, useWindowDimensions } from 'react-native'
import { Button, Card, List, TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import * as DocumentPicker from 'expo-document-picker'
import { useQueryStore } from '@/stores/query'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'

import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'
import CloseIcon from '@/assets/logo/VectorcloseButton.svg'
import {get, getAll} from '@/api/authenticated/query'
import { fileUploadType } from '@/interfaces/fileUpload'
import { query, queryTypeInterface } from '@/interfaces/query'
import CustomChipAccordion from '@/components/CustomChipAccordian'
import AsyncStorage from '@react-native-async-storage/async-storage'
import apiRequest from '@/api'

interface UploadedFiles{
  'id': number, 
  'file': fileUploadType
}

const Query = () => {
  
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  const softSaveQuery = useQueryStore((state : any) => state.addQuery);
  const [queryTypeExpanded, setQueryTypeExpanded] = useState(false);
  const [uploadedFilesExpanded, setUploadedFilesExpanded] = useState(false);
  const [selectedQueryType, setSelectedQueryType] = useState<queryTypeInterface[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles[]>([]);
  const [queryDescription, setQueryDescription] = useState<string>('')
  const [bearerToken,setBearerToken] = useState('');
  const router = useRouter();

  const[caseAccepted,setCase] = useState()

  const QueryType = [
    { id: '7709fa1a-0f15-4826-8b97-74d0eb06465a', title: 'Contract Drafting' },
    { id: 'c3daa0af-dc0e-45ce-b06e-b519b80234ac', title: 'Legal Advice' },
    { id: 'ee15f90f-9f35-47fd-b54f-4a0ac0366fc0', title: 'Document Review' },
    { id: '90aff834-bb08-473d-9f1d-8e03be3aeb2e', title: 'Dispute Resolution' }
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

  const handleQuerySubmission = async () => {
    const structuredQuery = {
      name: 'A new query!',
      query_types: ["7e4c2b47-fd12-4d23-b8c4-4c1f8fcae65d"],
      documents: [],
      description: queryDescription,
    };
  
    try {
      const token = await AsyncStorage.getItem('access_token');
  
      if (!token) {
        throw new Error('Bearer token is missing.');
      }

      
      if (token) {
        softSaveQuery(structuredQuery)
        const response = await apiRequest('/query', 'POST', structuredQuery, {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        });
  
        console.log('Query submitted successfully:', response);
        router.push('/(tabs)/home/matching')
      
  
      } else {
        console.error('Bearer token is missing.');
      }
    } catch (error) {
      console.error('Failed to submit query:', error);
    }
  };


  return (
    <View className='bg-white h-[100%] items-center'>
      <View className='w-[85%] h-[100%]'>
        <View className={`h-[15%] justify-center items-center ${queryTypeExpanded || uploadedFilesExpanded ? 'mb-[1%]' : 'mb-[5%]'}`}>
            <Text className='text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*16)}}>We need a few things from you </Text>
            <Text className='text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*16)}}>before we can match you </Text>
            <Text className='text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*16)}}>with a legal expert</Text>
        </View>
        <View className={`max-h-[20%] ${queryTypeExpanded ? 'mb-[13%]' : 'mb-[5%]'}`}>
            <Text className='text-Neutral-6 font-cmedium pb-[2%]' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Legal query type</Text>
            <List.Accordion
              title= {selectedQueryType.length === 0 ? <Text className='text-Neutral-7' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Select legal query category/s</Text> : <Text className='text-primary-foreground pl-1' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>{selectedQueryType.map(item => item.title).join(", ")}</Text>}
              expanded={queryTypeExpanded}
              onPress={() => {setQueryTypeExpanded(!queryTypeExpanded); setUploadedFilesExpanded(false)}}>
              <ScrollView className='max-h-[60%] '>
                {QueryType.map((type) => (
                  <Text
                    key={type.id}
                    className='py-[5%] text-Neutral-2 font-cmedium pl-[5%]'
                    style={{fontSize: Math.round(fontScaledSizeRatio*10)}}
                    onPress={() => {setSelectedQueryType((prev) => [...prev, { id : type.id, title : type.title }]); setQueryTypeExpanded(!queryTypeExpanded)}}
                  >{type.title}</Text>
                ))}
              </ScrollView>
            </List.Accordion>
            {/* <CustomChipAccordion listItemData={QueryType} handleItemSelectionChange={(selectedQueryType : queryTypeInterface[]) => setSelectedQueryType(selectedQueryType)} itemsSelected={selectedQueryType} windowHeight={height} windowWidth={width}/> */}
        </View>
        <View className='flex h-[15%] justify-between mb-[10%] '>
          <Text className='text-Neutral-6 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Your query</Text>
          <TextInput multiline placeholder='Type your legal query here' style={{height:'80%'}} className='rounded-lg' value={queryDescription} onChangeText={(e) => setQueryDescription(e)}></TextInput>
        </View>

        <Card className='h-[20%] bg-Neutral-10 rounded-lg shadow-none justify-center items-center border-dashed border-2 border-Neutral-8 mb-[1%]'>
         <View className=' h-[80%] justify-evenly items-center'>
            <Text className='text-Neutral-7 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>
              Upload any required file or document
            </Text>
            <Button mode='outlined' className='w-[50%] h-[50%] items-center justify-center' icon={'upload'} onPress={fileUploadHandler}>
              <Text className='font-cbold items-center text-center' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Browse</Text>
            </Button>
         </View>
        </Card>
          
          <Text>{caseAccepted}</Text>

        {
        uploadedFiles.length > 0 &&
          <View className=' max-h-[20%]'>
            <List.Accordion
              title= {<Text className='text-Neutral-5 font-cbold' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Documents Uploaded - {uploadedFiles.length}</Text>}
              expanded={uploadedFilesExpanded}
              onPress={()=> {setUploadedFilesExpanded(!uploadedFilesExpanded); setQueryTypeExpanded(false)}}>
              <ScrollView className='max-h-[70%] '>
                {uploadedFiles.map((eachFile) => (
                  <View key={eachFile.id} className='flex-row py-[2%] pl-[5%] justify-between items-center'>
                    <Text className=' text-Neutral-2 font-cmedium ' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>{eachFile.file.name}</Text>
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
          <Button 
              mode='contained' 
              className='w-full h-[60%] items-center justify-center' 
              labelStyle={{ fontSize: Math.round(fontScaledSizeRatio*11), fontFamily: 'Caros-Medium' }}
              onPress={handleQuerySubmission}>
              Submit query
          </Button>
        </View>

      </View> 
    </View>
  )
}

export default Query