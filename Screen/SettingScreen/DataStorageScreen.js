import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const DataStorageScreen = () => {
  const toggleSaveData = (value) => {
    // Handle toggling save data setting if needed
    console.log('Save Data Switch:', value);
  };

  const toggleCloudBackup = (value) => {
    // Handle toggling cloud backup setting if needed
    console.log('Cloud Backup Switch:', value);
  };

  const handleDeleteData = () => {
    // Handle delete data functionality if needed
    console.log('Delete Data Button Pressed');
  };

  const handleBackupData = () => {
    // Handle backup data functionality if needed
    console.log('Backup Data Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Data & Storage Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Save Data Locally</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor="#fff"
          onValueChange={toggleSaveData}
          value={true} // Set the initial value based on the user's preference
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Cloud Backup</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor="#fff"
          onValueChange={toggleCloudBackup}
          value={true} // Set the initial value based on the user's preference
        />
      </View>

      <TouchableOpacity onPress={handleDeleteData} style={styles.button}>
        <Text style={styles.buttonText}>Delete Data</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBackupData} style={styles.button}>
        <Text style={styles.buttonText}>Backup Data</Text>
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

export default DataStorageScreen;
