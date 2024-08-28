import React, { useEffect, useCallback, useState, useLayoutEffect, useRef } from 'react';
import uuid from 'react-native-uuid';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, KeyboardAvoidingView, Keyboard, useWindowDimensions, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Avatar, Button, IconButton } from 'react-native-paper';
// import { auth, db } from '../firebase';
// import { signOut } from 'firebase/auth';
import { GiftedChat, InputToolbar, Send, Actions, Bubble, Composer, Time } from 'react-native-gifted-chat';
import * as DocumentPicker from 'expo-document-picker'


import SendButton from '@/assets/logo/VectorMessageSend.svg'
import AttachmentButton from '@/assets/logo/VectormessageAttachement.svg'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';
import { SafeAreaView } from 'react-native-safe-area-context';


// const Chat = ({ navigation }) => {
  const Chat = () => {
    interface Message {
      _id: string;
      text: string;
      createdAt: Date;
      user: {
        _id: string;
        name: string;
        avatar: string;
      };
    }

    interface DocumentPickerType{
      "mimeType": string,
      "name": string,
      "size": number,
      "uri": string
    }
      
    const {width, height} = useWindowDimensions();
    const fontScaledSizeRatio = FontScaledSizeRatio();
    const [messages, setMessages] = useState<Message[]>([]);
    const [chatSpaceScreenSize, setChatSpaceScreenSize] = useState<number>(92)
    const [chatInputFocus, setChatInputFocus] = useState(false);
    const [chatInputText, setChatInputText] = useState('');
    const textInputRef = useRef<TextInput>(null);
    const keyboardHeight :  number = 400 // Take the value from local storage that should be stored during auth in the local storage. and also do a check when the keyboard opens patch the heigh
    const chatUser = {
                        _id: 'THEONE@THEONE.COM',
                        name: 'THE ONE',
                        avatar: require('@/assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg')
                      } //To be taken from authentication 

    useEffect(() => {
      // const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
      //   // setChatSpaceMarginBottom(e.endCoordinates.height);
      //   console.log("THE END COORDINATE ATTACK ::::: ", e.endCoordinates)
      //   setChatSpaceMarginBottom('8%');
      // });
  
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setChatSpaceScreenSize(90);
        setChatInputFocus(false);
      });
  
      return () => {
        // keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
    
    const renderSend = (props:any) => {
      return <CustomSend {...props} />;
    };
  
    const renderActions = (props:any) => {
      return <CustomActions {...props} />;
    };
    
    const CustomSend = ((props:any) => {
      return (
        <Send {...props}>
          <View>
              <SendButton width={width*0.06} height={width*0.06} />
          </View>
        </Send>
      );
    });
    
    const CustomActions = ((props:any) => {
      return (
        <Actions
          {...props}
          containerStyle={{
            marginHorizontal: width*0.02,
          }}
          icon={() => <AttachmentButton width={width*0.06} height={width*0.06} />}
        />
      );
    });
   
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <View style={{ marginLeft: 20 }}>
    //                 <Avatar.Icon size={24} icon="folder" />
    //             </View>
    //         ),
    //         headerRight: () => (
    //             <TouchableOpacity style={{
    //                 marginRight: 10
    //             }}
    //                 onPress={()=> console.log("SIGN OUT !!")}
    //             >
    //                 <Text>logout</Text>
    //             </TouchableOpacity>
    //         )
    //     })
    // }, [navigation]);

    useEffect(() => {
        setMessages([
            {
                _id: "1",
                text: 'Hello and Welcome to Schrute Firm. Together, lets beet your legal problems.',
                createdAt: new Date(),
                user: {
                    _id: "2",
                    name: 'React Native',
                    avatar: require('@/assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg'),
                },
            },
        ])
    }, []);

    useEffect(() => {
          if (chatInputFocus && textInputRef.current) {
            textInputRef.current.focus();
          }
        }, [chatInputFocus]);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    const renderInputToolbar = (props:any) => {
      return <CustomInputToolbar {...props} />;
    };
    
    const CustomInputToolbar = ((props:any) => {
      return (
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: '#F1F1F1',
            borderRadius: 10,
            marginHorizontal: width*0.03,
            marginBottom: width*0.03,
            padding: width*0.01
          }}
        />
      );
    });

    const handleChatSubmission = () => {
      const processedChat : Message = {
        _id: uuid.v4().toString(),
        createdAt : new Date(),
        text: chatInputText,
        user: chatUser
      }

      setMessages(prev => [ processedChat, ...prev])
      setChatInputText('')
    }

    const handleFileSubmission = async() => {
      try{
        const file = await DocumentPicker.getDocumentAsync({
          type: "application/pdf",
          copyToCacheDirectory: true
        });
  
        console.log("THE UPLOADED FILE ::: ", file)
      }catch(error){
          console.log(error)
      }
    }

    return (
        <View className='h-full bg-white flex-1'>

          <View style={{height: chatSpaceScreenSize+'%'}}>
            <GiftedChat
                messages={messages}
                showAvatarForEveryMessage={true}
                onSend={(messages : any) => onSend(messages)}
                user={chatUser}
                renderInputToolbar={()=>null}
                // renderSend={renderSend}
                // renderActions={renderActions}
                renderComposer={(props) => {
                    return(
                        <Composer
                          {...props}
                        textInputStyle={{ 
                            color: '#484E51',
                            fontFamily: 'Caros',
                            fontSize: Math.round(fontScaledSizeRatio*11)
                        }}
                        />
                    )
                }}
                renderBubble={(props) => {
                    return (
                      <Bubble
                        {...props}
                        wrapperStyle={{
                          left: {
                            backgroundColor: "#F1F1F1",
                            borderRadius: 5
                          },
                          right: {
                            backgroundColor: "#E5EEF7",
                            borderRadius: 5
                          },
                        }}
                        textStyle={{
                          left: {
                            color: "#000",
                            padding: width*0.02,
                            fontFamily: 'Caros',
                            fontSize: Math.round(fontScaledSizeRatio*11)
                          },
                          right: {
                            color: "#000",
                            padding: width*0.02,
                            fontFamily: 'Caros',
                            fontSize: Math.round(fontScaledSizeRatio*11)
                          },
                        }}
                      />
                    );
                }}
                renderTime={(props) => {
                      return (
                        <Time
                        {...props}
                          timeTextStyle={{
                            left: {
                              color: '#788287',
                            },
                            right: {
                              color: '#788287',
                            },
                          }}
                        />
                      )
                }}
            />
          </View>
          <View className='h-[10%] mx-[2%]'>
            <View className='flex-row h-[70%] w-full bg-Neutral-10 rounded-lg border-none items-center text-center justify-evenly'>
              <TouchableOpacity activeOpacity={1} className='h-full w-[70%]' onPress={() => {!chatInputFocus && setChatSpaceScreenSize(chatSpaceScreenSize + 2 - (keyboardHeight*100/height)); setChatInputFocus(true)}}>
                <TextInput 
                  className='h-full w-full bg-Neutral-10 font-c text-Neutral-2'
                  style={{fontSize: Math.round(fontScaledSizeRatio*11)}}
                  multiline
                  placeholder='Type your concerns in ...'
                  ref={textInputRef}
                  editable={chatInputFocus}
                  onChangeText={text => setChatInputText(text)}
                  value={chatInputText}
                />
              </TouchableOpacity>

              <TouchableWithoutFeedback onPress={handleFileSubmission}><AttachmentButton height={width*0.06} width={width*0.06}/></TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={handleChatSubmission}><SendButton height={width*0.05} width={width*0.05}/></TouchableWithoutFeedback>
            </View>
          </View>
      </View>
    );
}
  

export default Chat;