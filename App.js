import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import CreatePatientScreen from './screens/CreatePatientScreen';
import UpdatePatientScreen from './screens/UpdatePatientScreen';
import DeletePatientScreen from './screens/DeletePatientScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CreatePatient" component={CreatePatientScreen} options={{ headerShown: false }}/>

        {/* Add more screens and navigation here as your project progresses */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
