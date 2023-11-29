import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const GeneralScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>General Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor={notificationsEnabled ? '#007BFF' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor={darkModeEnabled ? '#007BFF' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Language</Text>
        <TouchableOpacity>
          <Text style={styles.settingValue}>English</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <Text style={styles.buttonText}>Go Back</Text>
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
      settingValue: {
        color: '#007BFF',
        fontSize: 16,
      },
      goBackButton: {
        backgroundColor: '#3D8BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'flex-start',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 12,
     },
});

export default GeneralScreen;
