import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  const toggleNotification = (value) => {
    // Handle toggling notification settings if needed
    console.log('Notification Switch:', value);
  };

  const toggleSound = (value) => {
    // Handle toggling sound settings if needed
    console.log('Sound Switch:', value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notification Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor="#fff"
          onValueChange={toggleNotification}
          value={true} // Set the initial value based on the user's preference
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Sound</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor="#fff"
          onValueChange={toggleSound}
          value={true} // Set the initial value based on the user's preference
        />
      </View>
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
});

export default NotificationsScreen;
