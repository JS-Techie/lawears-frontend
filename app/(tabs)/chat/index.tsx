import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Keyboard, useWindowDimensions } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
// import { auth, db } from '../firebase';
// import { signOut } from 'firebase/auth';
import { GiftedChat, InputToolbar, Send, Actions, Bubble, Composer } from 'react-native-gifted-chat';

import SendButton from '@/assets/logo/VectorMessageSend.svg'
import AttachmentButton from '@/assets/logo/VectormessageAttachement.svg'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';


// const Chat = ({ navigation }) => {
  const Chat = () => {
    interface Message {
      _id: number;
      text: string;
      createdAt: Date;
      user: {
        _id: number;
        name: string;
        avatar: string;
      };
    }
      
    const {width, height} = useWindowDimensions();
    const fontScaledSizeRatio = FontScaledSizeRatio();
    const [messages, setMessages] = useState<Message[]>([]);
    const [chatSpaceMarginBottom, setChatSpaceMarginBottom] = useState('');
    const [x, setX] = useState(-300)

    console.log("WIDTH AND HEIGHT ::: ", width," ----- ", height)
    // useEffect(() => {
    //   const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
    //     // setChatSpaceMarginBottom(e.endCoordinates.height);
    //     console.log("THE END COORDINATE ATTACK ::::: ", e.endCoordinates)
    //     setChatSpaceMarginBottom('8%');
    //   });
  
    //   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    //     setChatSpaceMarginBottom('');
    //   });
  
    //   return () => {
    //     keyboardDidShowListener.remove();
    //     keyboardDidHideListener.remove();
    //   };
    // }, []);

    const renderInputToolbar = (props:any) => {
        return <CustomInputToolbar {...props} />;
      };
    
      const renderSend = (props:any) => {
        return <CustomSend {...props} />;
      };
    
      const renderActions = (props:any) => {
        return <CustomActions {...props} />;
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
                _id: 1,
                text: 'Hello and Welcome to Schrute Firm. Together, lets beet your legal problems.',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: require('@/assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg'),
                },
            },
        ])
    }, []);
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    return (
        <View className='h-full bg-white flex-1'>

          <KeyboardAvoidingView style={{flex: 1, marginBottom: width*0.03}}>
            <GiftedChat
                messages={messages}
                showAvatarForEveryMessage={true}
                onInputTextChanged={()=> {}}
                onSend={(messages : any) => onSend(messages)}
                user={{
                    _id: 'THEONE@THEONE.COM',
                    name: 'THE ONE',
                    avatar: require('@/assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg')
                }}
                minInputToolbarHeight={width*0.25}
                placeholder='Type your concerns in ...'
                renderInputToolbar={renderInputToolbar}
                renderSend={renderSend}
                renderActions={renderActions}
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
            />
            </KeyboardAvoidingView>
        </View>
    );
}
  

export default Chat;