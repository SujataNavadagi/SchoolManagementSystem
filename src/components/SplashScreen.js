

import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Splash = () => {
  useEffect(() => {
    // Simulate some loading process or navigation
    setTimeout(() => {
      SplashScreen.hide(); // Hide splash screen after loading
      // Navigate to the main screen or perform other actions
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust the background color
  },
  logo: {
    width: 200, // Adjust the width of your logo
    height: 200, // Adjust the height of your logo
  },
});

export default Splash;
