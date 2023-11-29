import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Setting({ navigation, route }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar,setAvatar] =useState("");
  const [userData, setUserData] = useState({
    phone: '',
    username: '',
    avatar: '',
  });

  useEffect(() => {
    
    const userId = route.params.userId; // Assuming userId is passed as a parameter
    // Fetch user data from your API using the GET method
    fetch(`https://656498a3ceac41c0761e7f0f.mockapi.io/api/user/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Avatar URL:", data.avatar);
        setUserData({
          phone: data.phone,
          username: data.username,
          avatar: data.avatar,
        });

        // Update the state variables
        setUsername(data.username);
        setPhone(data.phone);
        setAvatar(data.avatar);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  },  [route.params.userId]); 
  const ChatScreen = (userId) => {
    navigation.navigate('Chats', { userId });
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <Text style={styles.headerText}>Setting</Text>
        </View>
      </View>
      {/* Info */}
      <View style={styles.infoView}>
        {/* Image */}
        <View style={styles.profilePic}>
          <Image source={{ uri: avatar }} style={styles.image} />
        </View>
        {/* Name */}
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            {username}
          </Text>
        </View>
        {/* Phone */}
        <View style={styles.phoneView}>
          <Text style={styles.phoneText}>
            + {phone}
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Navigate to Info')}>
          <View style={styles.arrowBtn_Info}>
            <Image source={require('../assets/24--arrow-l1.png')} style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>
      </View>
      {/* General */}
      <TouchableOpacity onPress={() => console.log('Navigate to General')}>
        <View style={styles.settingNode}>
          <View style={styles.innerNode}>
            <Text style={styles.nodeText}>General</Text>
          </View>
          <View style={styles.arrowBtn_Node}>
            <Image source={require('../assets/24--arrow-l1.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>
      {/* Notifications & Sounds */}
      <TouchableOpacity onPress={() => console.log('Navigate to Notifications & Sounds')}>
        <View style={styles.settingNode}>
          <View style={styles.innerNode}>
            <Text style={styles.nodeText}>Notifications & Sounds</Text>
          </View>
          <View style={styles.arrowBtn_Node}>
            <Image source={require('../assets/24--arrow-l1.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>
      {/* Data & Storage Usage */}
      <TouchableOpacity onPress={() => console.log('Navigate to Data & Storage Usage')}>
        <View style={styles.settingNode}>
          <View style={styles.innerNode}>
            <Text style={styles.nodeText}>Data & Storage Usage</Text>
          </View>
          <View style={styles.arrowBtn_Node}>
            <Image source={require('../assets/24--arrow-l1.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>
      {/* Privacy & Security */}
      <TouchableOpacity onPress={() => console.log('Navigate to Privacy & Security')}>
        <View style={styles.settingNode}>
          <View style={styles.innerNode}>
            <Text style={styles.nodeText}>Privacy & Security</Text>
          </View>
          <View style={styles.arrowBtn_Node}>
            <Image source={require('../assets/24--arrow-l1.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>
      {/* Help */}
      <TouchableOpacity onPress={() => console.log('Navigate to Help')}>
        <View style={styles.settingNode}>
          <View style={styles.innerNode}>
            <Text style={styles.nodeText}>Help</Text>
          </View>
          <View style={styles.arrowBtn_Node}>
            <Image source={require('../assets/24--arrow-l1.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>
      {/* Log out */}
      <View style={styles.settingNode}>
        <View style={styles.innerNode}>
          <TouchableOpacity onPress={() => navigation.navigate('Introduce')}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => ChatScreen(route.params.userId)} style={styles.chatButton}>
          <View style={styles.iconContainer}>
            <Icon name="comment-o" size={20} color="#DDDDDD" />
            <Text style={styles.iconText}>Chats</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.settingsButton}>
          <View style={styles.iconContainer}>
            <Icon name="gear" size={20} color="#0099FF" />
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16, 
    paddingBottom: 16, 
  },
  
  header: {
    backgroundColor: '#3D8BFF',
    width: '100%',
    height: 62,
    justifyContent: 'center',
    marginBottom: 16, // Thêm khoảng cách từ phía dưới
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
  infoView: {
    width: 390,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 24,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  nameView: {
    paddingLeft: 16,
  },
  nameText: {
    color: '#262933',
    fontFamily: 'SF Pro Display',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 600,
  },
  phoneText: {
    color: '8A8E9C',
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  arrowBtn_Info: {
    paddingRight: 16,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  settingNode: {
    width: 390,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  innerNode: {
    paddingVertical: 17,
  },
  nodeText: {
    color: '#262933',
    fontFamily: 'SF Pro Display',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  arrowBtn_Node: {},
  logoutText: {
    color: '#E46246',
    fontFamily: 'SF Pro Display',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  phoneView: {
    color: '8A8E9C',
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 400,
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
