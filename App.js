import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import DashboardScreen from './src/screens/DashboardScreen'; 
import ViewGrades from './src/screens/ViewGrades';
import UpdateProfile from './src/screens/UpdateProfile';
import ManageCourses from './src/screens/ManageCourses';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegistrationScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ViewGrades" 
          component={ViewGrades} 
          options={{ headerShown: false }} // Remove the header
        />
        <Stack.Screen 
          name="UpdateProfile" 
          component={UpdateProfile} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ManageCourses" 
          component={ManageCourses} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;