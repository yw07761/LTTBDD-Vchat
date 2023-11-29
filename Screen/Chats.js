import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Chats({ navigation, route }) {
  const [chats, setChats] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = route.params.userId;

    // Fetch chat data from API
    fetch(`https://656498a3ceac41c0761e7f0f.mockapi.io/api/user/${userId}/chat`)
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        setChats(data[0]?.chats || []);
      })
      .catch((error) => console.error('Error fetching chat data:', error));
      
    // Fetch user data from API
    fetch(`https://656498a3ceac41c0761e7f0f.mockapi.io/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('User Data:', data);
        setUserData({
          avatar: data.avatar,
          username: data.username,
        });
      })
      .catch((error) => console.error('Error fetching user data:', error));

    
  }, [route.params.userId]);

  const logInAndNavigateToSettings = (userId) => {
    navigation.navigate('Setting', { userId });
  };

  const renderItem = ({ item }) => {
    const lastMessage = item.messages[item.messages.length - 1];

    return (
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => navigation.navigate('ChatDetails', { chatId: item.chatId })}
      >
        <Image source={{ uri: userData?.avatar }} style={styles.avatar} />
        <View style={styles.chatInfo}>
          <Text style={styles.chatUsername}>{userData?.username}</Text>
          <Text
            style={[
              styles.lastMessage,
              item.messages.senderId === route.params.userId ? styles.userMessage : null,
            ]}
          >
            {lastMessage?.content}
          </Text>
        </View>
        <Text style={styles.timestamp}>{lastMessage?.timestamp}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <Text style={styles.headerText}>Chats</Text>
        </View>
      </View>
      {/* Chat List */}
      <FlatList data={chats} keyExtractor={(item) => item.chatId} renderItem={renderItem} />
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')} style={styles.chatButton}>
          <View style={styles.iconContainer}>
            <Icon name="comment-o" size={20} color="#0099FF" />
            <Text style={styles.iconText}>Chats</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.notificationButton}>
          <View style={styles.iconContainer}>
            <Icon name="bell" size={20} color="#DDDDDD" />
            <Text style={styles.iconText}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => logInAndNavigateToSettings(route.params.userId)}
          style={styles.settingsButton}
        >
          <View style={styles.iconContainer}>
            <Icon name="gear" size={20} color="#DDDDDD" />
            <Text style={styles.iconText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
    paddingTop: 16,
    paddingBottom: 16,
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
    fontSize: 34,
    textAlign: 'left',
    color: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', 
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  chatInfo: {
    flex: 1,
  },
  chatUsername: {
    fontWeight: '600',
    fontSize: 16,
  },
  lastMessage: {
    color: '#777',
    marginTop: 4,
  },
  userMessage: {
    color: 'green', // You can customize the style for user messages
    // For example, you can set a different color for the user's messages
  },
  timestamp: {
    fontSize: 9,
    color: '#777',
    alignSelf: 'flex-end',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 16,
  },
  chatButton: {
    flex: 1,
    marginRight: 100,
  },
  settingsButton: {
    flex: 1,
    marginLeft: 100,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 2,
  },
});
