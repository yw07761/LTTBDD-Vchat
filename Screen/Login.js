
import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Fetching data...');
    fetch("https://656498a3ceac41c0761e7f0f.mockapi.io/api/user", {
      method: 'GET',
    })
      .then((res) => {
        console.log('Response:', res);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        console.log('Fetched data:', json);
        setData(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  const logIn = () => {
    const foundUser = data.find(
      (item) => (item.phone === phone) && item.password === password
    );

    if (foundUser) {
      navigation.navigate('Introduce', { userId: foundUser.id });
    } else {
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        {/* Return Button */}
        <TouchableOpacity style={styles.backBtn}>
          <Image source={require('../assets/ReturnShape.png')} style={styles.backImage} />
        </TouchableOpacity>
        {/* Header Text */}
        <Text style={styles.headerText}>Đăng nhập</Text>
      </View>
      {/* Login */}
      <View style={styles.loginContainer}>
        {/* Username field */}
        <TextInput
              style={styles.input}
              placeholder="Email hoặc số điện thoại"
              value={phone}
              onChangeText={setPhone}
          ></TextInput>
        <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
          ></TextInput>
      </View>
      {/* Login Button */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => logIn()}
        >

        <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      {/* Or Text */}
      <View style={styles.orContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Hoặc đăng nhập bằng</Text>
        <View style={styles.divider} />
      </View>
      {/* Picture */}
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/google.png')} style={styles.imageStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/facebook.png')} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>

      {/* Custom Alert */}
      {showAlert && (
        <View style={styles.alertContainer}>
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>Người dùng không tồn tại hoặc sai mật khẩu</Text>
            <TouchableOpacity onPress={() => closeAlert()}>
              <Text style={styles.closeButton}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );}
  const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    backBtn: {
      padding: 10,
    },
    backImage: {
      width: 30,
      height: 30,
    },
    headerText: {
      flex: 1,
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    loginContainer: {
      width: '80%',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderBottomWidth: 1,
      marginBottom: 20,
      fontSize: 18,
      color: '#000',
    },
    inputFocused: {
      borderColor: '#0984E3',
      borderWidth: 2,
      shadowColor: '#0984E3',
      shadowOpacity: 0.5,
      shadowRadius: 2,
      transform: [{ scale: 1 }], // Add a default transform
    },
    buttonContainer: {
      width: 262,
    },
    button: {
      paddingVertical: 16,
      backgroundColor: '#477BFF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginBottom: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    orContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      marginTop: 20,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: '#000',
    },
    orText: {
      marginHorizontal: 10,
      fontSize: 14,
      color: '#000',
      fontFamily: 'Arial',
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
      marginTop: 20,
    },
    socialButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      overflow: 'hidden',
    },
    imageStyle: {
      width: '100%',
      height: '100%',
    },
    alertContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      alertBox: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
      },
      alertText: {
        fontSize: 18,
        marginBottom: 20,
      },
      closeButton: {
        fontSize: 16,
        color: 'blue',
    }, 
  });
  

