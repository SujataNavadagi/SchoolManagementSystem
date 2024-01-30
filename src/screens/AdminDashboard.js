import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AdminDashboard = ({ navigation }) => {
  const navigateToOtherDashboard = () => {
    navigation.navigate('OtherAdminDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Admin Dashboard</Text>
        <TouchableOpacity onPress={navigateToOtherDashboard} style={styles.button}>
        <Text style={styles.buttonText}>Go to Other Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminDashboard;
