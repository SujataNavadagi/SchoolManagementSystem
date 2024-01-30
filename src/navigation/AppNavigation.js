import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../components/SplashScreen';
import StudentDashboard from '../components/StudentDashboard';
import AssignmentScreen from '../components/AssignmentScreen';
import AdminDashboard from '../screens/AdminDashboard';
import OtherAdminDashboard from '../screens/OtherAdminDashboard';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="AssignmentScreen" component={AssignmentScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="OtherAdminDashboard" component={OtherAdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
