import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const PrivacyScreen = () => {
  const togglePrivateProfile = (value) => {
    // Handle toggling private profile setting if needed
    console.log('Private Profile Switch:', value);
  };

  const toggleTwoFactorAuth = (value) => {
    // Handle toggling two-factor authentication setting if needed
    console.log('Two-Factor Auth Switch:', value);
  };

  const handleLogout = () => {
    // Handle logout functionality if needed
    console.log('Logout Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Privacy & Security Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Private Profile</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor="#fff"
          onValueChange={togglePrivateProfile}
          value={true} // Set the initial value based on the user's preference
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Two-Factor Authentication</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor="#fff"
          onValueChange={toggleTwoFactorAuth}
          value={true} // Set the initial value based on the user's preference
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Change Password</Text>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
  },
  settingLabel: {
    fontSize: 16,
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

export default PrivacyScreen;
