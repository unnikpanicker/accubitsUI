/**
 * React native application for Accubits ui
 * Developed By : "Unnikrishnan N"
 * Date : "10 April 2021"
 *
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './src/screens/loginScreenView';
import DashboardScreen from './src/screens/dashboardScreenView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Dashboard"
            options={{headerShown: false}}
            component={DashboardScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
