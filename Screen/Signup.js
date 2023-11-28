import React, { useState } from 'react';
import { StatusBar, Alert, ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, Platform } from 'react-native';

export default function Signup({ navigation }) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = () => {
    if (!phone || !email || !password || !confirmPassword) {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Mật khẩu không khớp');
      return;
    }

    // Gửi yêu cầu POST đến API
    fetch("https://656498a3ceac41c0761e7f0f.mockapi.io/api/user", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        phone: phone,
        email: email,
        password: password,
      })
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON data from the response body
      })
      .then((data) => {
        console.log('API response:', data);
        if (data && data.id) {
          // Continue with the rest of your logic
          navigateToScreen3(data.id);
        } else {
          console.error('Invalid data or missing "id" property.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
  };

  const navigateToScreen3 = (userId) => {
    // Chuyển hướng đến màn hình khác với ID người dùng mới được thêm
    navigation.navigate("Login", { id: userId });
  };
  
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        {/* Return Button */}
        <TouchableOpacity style={styles.backBtn}>
          <ImageBackground source={require('../assets/ReturnShape.png')} style={styles.backImage}></ImageBackground>
        </TouchableOpacity>
        {/* Header Text */}
        <Text style={styles.headerText}>Đăng ký</Text>
      </View>
      {/* Input: Số điện thoại */}
      <View style={[styles.inputForm, phone && styles.inputFocused]}>
        {/* Text Input */}
        <TextInput
          placeholder='Số điện thoại'
          style={styles.textInput}
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      {/* Input: Email */}
      <View style={[styles.inputForm, email && styles.inputFocused]}>
        {/* Text Input */}
        <TextInput
          placeholder='Email'
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {/* Input: Mật khẩu */}
      <View style={[styles.inputForm, password && styles.inputFocused]}>
        {/* Text Input */}
        <TextInput
          placeholder='Mật khẩu'
          secureTextEntry={true}
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      {/* Input: Nhập lại mật khẩu */}
      <View style={[styles.inputForm, confirmPassword && styles.inputFocused]}>
        {/* Text Input */}
        <TextInput
          placeholder='Nhập lại mật khẩu'
          secureTextEntry={true}
          style={styles.textInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      {/* Signup Button */}
      <View style={{ padding: 16 }}>
        <TouchableOpacity style={styles.signupButton} onPress={signUp}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      {/* Text */}
      <View style={{ width: 261, height: 41 }}>
        <Text style={styles.text2}>Hoặc liên kết với tài khoản </Text>
      </View>
      {/* Picture */}
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <ImageBackground source={require('../assets/google.png')} style={styles.imageStyle}></ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <ImageBackground source={require('../assets/facebook.png')} style={styles.imageStyle}></ImageBackground>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20,  // Adjust this size as needed
    fontWeight: 'bold',
  },
  
  backBtn: {
    padding: 10,
  },
  backImage: {
    width: 30,
    height: 30,
  },
  inputForm: {
    width: 300,
    height: 50,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputFocused: {
    borderColor: '#0984E3',
    borderWidth: 2,
    shadowColor: '#0984E3',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    transform: [{ scale: 1 }],
  },
  textInput: {
    width: '100%',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  signupButton: {
    backgroundColor: '#0984E3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
    color: '#000',
    fontFamily: 'Arial',
    fontSize: 14,
    textAlign: 'center',
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
});
