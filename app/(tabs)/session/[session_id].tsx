import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ScrollView, Text, View, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiRequest from '@/api';

interface Message {
    sender_id?: string;
    content: string;
    sender_role: 'CUSTOMER' | 'ADVOCATE';
    timestamp: string;
}

interface SessionData {
    id?: string;
    advocate_id?: string;
    advocate_name?: string;
    advocate_specialization?: string;
    messages?: Message[];
}

const Session: React.FC = () => {
    const { session_id } = useLocalSearchParams<{ session_id: string; }>();
    const router = useRouter();
    const [newMessage, setNewMessage] = useState('');
    const [sessionData, setSessionData] = useState<SessionData | null>(null);
    const [userRole, setUserRole] = useState<'CUSTOMER' | 'ADVOCATE' | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const scrollViewRef = useRef<ScrollView>(null);
    const wsRef = useRef<WebSocket | null>(null);

  

    useEffect(() => {
        const fetchUserRole = async () => {
            const customer = await AsyncStorage.getItem('customer')
            const advocate = await AsyncStorage.getItem('advocate')

            setUserRole(customer == 'YES' ? 'CUSTOMER' : 'ADVOCATE')
            try {
                const role = await AsyncStorage.getItem('user_role');
                if (role === 'CUSTOMER' || role === 'ADVOCATE') {
                    setUserRole(role);
                }
            } catch (error) {
                console.error('Error fetching user role:', error);
                setError('Failed to fetch user role');
            }
        };

        const fetchSessionData = async () => {
            try {
                const response = await apiRequest(`/session/${session_id}`, 'GET');
                setSessionData(response.data);
            } catch (error) {
                console.error('Error fetching session data:', error);
                setError('Failed to fetch session data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserRole();
        fetchSessionData();
    }, [session_id]);

    useEffect(() => {
        const connectWebSocket = () => {
            const ws = new WebSocket(`ws://localhost:8000/ws/chat/${session_id}`);
    
            ws.onopen = () => {
                console.log("WebSocket connection established");
            };
    
            ws.onmessage = (event) => {
                console.log("Received message:", event.data);
                try {
                    const newMessage = JSON.parse(event.data);
                    setSessionData((prevData) => {
                        if (!prevData) {
                            return {
                                id: session_id,
                                advocate_id: '',
                                advocate_name: '',
                                advocate_specialization: '',
                                messages: [newMessage],
                            };
                        }
                        return {
                            ...prevData,
                            messages: [...(prevData.messages || []), newMessage], 
                        };
                    });
                    

                    // setSessionData(event.data)
                    console.log(sessionData?.messages)
                    scrollViewRef.current?.scrollToEnd({ animated: true });
                } catch (error) {
                    console.error("Error processing message:", error);
                }
            };
    
            ws.onerror = (error) => {
                console.error("WebSocket error:", error);
                setError('WebSocket connection error');
            };
    
            ws.onclose = () => {
                console.log("WebSocket connection closed");
            };
    
            wsRef.current = ws;
        };
    
        connectWebSocket();
    
        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, [session_id]);

    const sendMessage = useCallback(() => {
        if (!newMessage.trim() || !wsRef.current) return;
    
        const messageData = {
            content: newMessage,
            sender_role: userRole,
            timestamp: new Date().toISOString(),
            sender_id: userRole === 'ADVOCATE' ? sessionData?.advocate_id : sessionData?.advocate_id
        };
    
        wsRef.current.send(JSON.stringify(messageData));
        setNewMessage('');
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [newMessage, userRole, sessionData]);

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#00397B" />
            </View>
        );
    }

    if (error) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-red-500">{error}</Text>
            </View>
        );
    }

    const otherUserName = userRole == 'ADVOCATE' ? 'Mehul Chattopadhyay' : 'Parvez Mallick';
    const otherUserInitials = userRole == 'ADVOCATE' ? 'MC' : 'PM';
    const type = userRole == 'ADVOCATE' ? 'Legal Professional' : 'Client'

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row items-center justify-between p-4 border-b border-gray-200 bg-[#E4EEF7]">
                <View className="flex-row items-center space-x-3">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={24} color="#00397B" />
                    </TouchableOpacity>
                    <View className="w-10 h-10 border-2 border-neutral-400 rounded-full items-center justify-center">
                        <Text className="text-[#00397B] font-semibold">
                            {otherUserInitials}
                        </Text>
                    </View>
                    <View>
                        <Text className="font-semibold">{otherUserName}</Text>
                        <Text className="text-sm text-[#00397B]">
                            {sessionData?.advocate_specialization || 'Legal Professional'}
                        </Text>
                    </View>
                </View>
                <View className="flex-row space-x-4">
                    <TouchableOpacity>
                        <Ionicons name="information-circle-outline" size={24} color="#00397B" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/home')}>
                        <Ionicons name="close" size={24} color="#00397B" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView 
                ref={scrollViewRef}
                className="flex-1 px-4"
                contentContainerStyle={{ paddingVertical: 16 }}
            >
                {(sessionData?.messages?? []).map((message, index) => (
                    <View key={index} className={`my-2 max-w-[80%] ${message.sender_role === userRole ? 'self-end' : 'self-start'}`}>
                        <View className={`p-3 rounded-2xl ${message.sender_role === userRole ? 'bg-[#E5EEF7]' : 'bg-gray-100'}`}>
                            <Text>{message.content}</Text>
                        </View>
                        <Text className="text-xs text-gray-500 mt-1">
                            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View className="p-4 border-t border-gray-200">
                <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
                    <TextInput
                        className="flex-1"
                        placeholder="Type your message here..."
                        placeholderTextColor="#999"
                        value={newMessage}
                        onChangeText={setNewMessage}
                        multiline
                    />
                    <TouchableOpacity className="ml-2" onPress={sendMessage}>
                        <Ionicons name="send" size={24} color="#00397B" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Session;