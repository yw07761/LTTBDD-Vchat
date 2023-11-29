import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ChatDetails({ route }) {
  const { chatId } = route.params;
  const [chatDetails, setChatDetails] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch chat details from API based on chatId
    fetch(`https://656498a3ceac41c0761e7f0f.mockapi.io/api/chat/${chatId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Chat Details:', data);
        setChatDetails(data || null);
        setMessages(data.messages || []);
      })
      .catch((error) => console.error('Error fetching chat details:', error));
  }, [chatId]);

  const sendMessage = async () => {
    try {
      // Assuming you have an API endpoint to send a new message
      const response = await fetch(`https://your-api-endpoint-for-sending-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: chatId,
          content: newMessage,
          // Add any other necessary data, e.g., senderId
        }),
      });

      const result = await response.json();

      // Update the local state with the new message
      setMessages((prevMessages) => [...prevMessages, result]);

      // Clear the input field
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (!chatDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <Text style={styles.headerText}>Chat Details</Text>
        </View>
      </View>
      {/* Chat Details */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Image source={{ uri: item.senderId.avatar }} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.senderName}>{item.senderId.username}</Text>
              <Text style={styles.messageText}>{item.content}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </View>
        )}
      />
      {/* Input field for new message */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  header: {
    backgroundColor: '#3D8BFF',
    width: '100%',
    height: 62,
    justifyContent: 'center',
    marginBottom: 16,
  },
  innerHeader: {
    paddingLeft: 18,
    paddingVertical: 10,
    height: 41,
  },
  headerText: {
    fontWeight: '700',
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    textAlign: 'left',
    color: '#fff',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  senderName: {
    fontWeight: '600',
    fontSize: 16,
  },
  messageText: {
    color: '#333',
    marginTop: 4,
  },
  timestamp: {
    fontSize: 9,
    color: '#777',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#3D8BFF',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
