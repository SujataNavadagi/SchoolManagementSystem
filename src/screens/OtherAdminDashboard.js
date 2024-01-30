import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtherAdminDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Other Admin Dashboard</Text>
    
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
});

export default OtherAdminDashboard;
