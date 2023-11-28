import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Introduce() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Logo */}
      <View style={styles.image}>
        <Image source={require('../assets/logo.png')} style={styles.logoImage} />
      </View>
      {/* Slogan */}
      <View style={styles.slogan}>
        <Text style={styles.sloganText}>
          Xin chào! Chúng tôi đang sử dụng Vchat để trò chuyện và chia sẻ thông tin. 
          Hãy tham gia với chúng tôi và trải nghiệm sự tiện ích của nó.
        </Text>
      </View>
      {/* Button Area */}
      <View style={styles.buttonContainer}>
        {/* Btn 1 */}
        <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
        <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        </View>
        {/* Btn 2 */}
        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Signup')}
          ><Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>@Created by Vân Anh</Text>
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
  image: {
    marginBottom: 20,
  },
  logoImage: {
    width: 225,
    height: 225,
  },
  slogan: {
    width: 300,
    marginBottom: 20,
  },
  sloganText: {
    color: '#477BFF',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '400',
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
  footer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  footerText: {
    color: '#888',
    fontSize: 12,
  },
});
