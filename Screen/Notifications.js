import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Notifications = () => {
  const notifications = [
    { id: 1, title: 'New Message', message: 'You have a new message.', timestamp: '1 minute ago' },
    { id: 2, title: 'New Message', message: 'You have a new message.', timestamp: '4 minutes ago' },
    { id: 3, title: 'New Message', message: 'You have a new message.', timestamp: '10 minutes ago' },
    { id: 4, title: 'New Message', message: 'You have a new message.', timestamp: '23 minutes ago' },
    { id: 5, title: 'New Message', message: 'You have a new message.', timestamp: '30 minutes ago' },
    { id: 6, title: 'New Message', message: 'You have a new message.', timestamp: '33 minutes ago' },
    { id: 7, title: 'New Message', message: 'You have a new message.', timestamp: '50 minutes ago' },
    { id: 8, title: 'New Message', message: 'You have a new message.', timestamp: '58 minutes ago' },
    { id: 9, title: 'New Message', message: 'You have a new message.', timestamp: '1 hour ago' },
    { id: 10, title: 'New Message', message: 'You have a new message.', timestamp: '2 hours ago' },
    { id: 11, title: 'Reminder', message: 'Don\'t forget your meeting at 3 PM.', timestamp: '1 day ago' },
    { id: 12, title: 'Update', message: 'App update is available.', timestamp: '3 days ago' },
    // Add more notification items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()} // adjust this based on your data structure
        renderItem={renderItem}
        contentContainerStyle={styles.notificationList}
      />
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
  notificationList: {
    flexGrow: 1,
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#555',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 8,
  },
});

export default Notifications;
