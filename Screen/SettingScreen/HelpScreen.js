import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HelpScreen = () => {
  const handleContactSupport = () => {
    // Handle contact support functionality if needed
    console.log('Contact Support Button Pressed');
  };

  const handleFAQ = () => {
    // Handle FAQ functionality if needed
    console.log('FAQ Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Help & Support</Text>

      <TouchableOpacity onPress={handleContactSupport} style={styles.button}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleFAQ} style={styles.button}>
        <Text style={styles.buttonText}>FAQ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HelpScreen;
