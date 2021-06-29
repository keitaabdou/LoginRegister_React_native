import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Login from './src/components/Login'
import Register from './src/components/Register'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
     <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}



