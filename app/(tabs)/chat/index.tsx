import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
// import { auth, db } from '../firebase';
// import { signOut } from 'firebase/auth';
import { GiftedChat, InputToolbar, Send, Actions, Bubble, Composer } from 'react-native-gifted-chat';
import { FontAwesome } from '@expo/vector-icons';


import CloseButton from '../../../assets/logo/VectorcloseButton.svg'
import EastBackButton from '../../../assets/logo/eastbackButton.svg'
import InfoButton from '../../../assets/logo/VectorinfoIcon.svg'
import SendButton from '../../../assets/logo/VectorMessageSend.svg'
import AttachmentButton from '../../../assets/logo/VectormessageAttachement.svg'


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
    const [messages, setMessages] = useState<Message[]>([]);

    const renderInputToolbar = (props:any) => {
        return <CustomInputToolbar {...props} />;
      };
    
      const renderSend = (props:any) => {
        return <CustomSend {...props} />;
      };
    
      const renderActions = (props:any) => {
        return <CustomActions {...props} />;
      };
   
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
                    avatar: require('../../../assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg'),
                },
            },
        ])
    }, []);
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);
    return (
        <View className='h-full bg-white flex-1'>
            <View className='h-[15%] bg-Blue-4'>
                <View className='flex-row mt-[10%] mx-auto items-center justify-center'>
                    <EastBackButton height={25} width={25}/>
                    <View className='flex-row w-[60%] mx-5 items-center justify-start'>
                        <View className='flex items-center justify-evenly border-4 border-Blue-5 rounded-full'>
                         <Avatar.Image size={70} source={require('../../../assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg')}/>
                         {/* <Image source={require('../../assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg')} className='w-[10%] h-[10%]'/> */}
                        </View>
                        <View className='flex items-start justify-center mx-1'>
                            <Text className='text-3xl font-cbold text-Neutral-2 text-start'>Dwight Schrute</Text>
                            <Text className='text-lg font-c text-primary-background text-start'>Identity Theft Lawyer</Text>
                        </View>
                    </View>
                    <View className='flex mr-5'>
                        <InfoButton height={20} width={20}/>
                    </View>
                    <View className='flex mr-5'>
                        <CloseButton height={20} width={20}/>
                    </View>
                </View>
            </View>

            <GiftedChat
                messages={messages}
                showAvatarForEveryMessage={true}
                onSend={(messages : any) => onSend(messages)}
                user={{
                    _id: 'THEONE@THEONE.COM',
                    name: 'THE ONE',
                    avatar: require('../../../assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg')
                }}
                minInputToolbarHeight={100}
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
                            fontFamily: 'Caros'
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
                            padding: 10,
                            fontFamily: 'Caros'
                          },
                          right: {
                            color: "#000",
                            padding: 10,
                            fontFamily: 'Caros'
                          },
                        }}
                      />
                    );
                }}
            />
        </View>
    );
}

const CustomInputToolbar = ((props:any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#F1F1F1',
          borderRadius: 10,
          marginHorizontal: 10,
          marginBottom: 15,
          padding: 5
        }}
      />
    );
  });
  
  const CustomSend = ((props:any) => {
    return (
      <Send {...props}>
        <View>
            <SendButton width={24} height={24} />
        </View>
      </Send>
    );
  });
  
  const CustomActions = ((props:any) => {
    return (
      <Actions
        {...props}
        containerStyle={{
          marginHorizontal: 5,
        }}
        icon={() => <AttachmentButton width={24} height={24} />}
      />
    );
  });
  

export default Chat;