import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import CustomDrawerContent from './src/components/CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      {/* Add other screens here */}
    </Drawer.Navigator>
  );
};

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
          component={DrawerNavigator} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;