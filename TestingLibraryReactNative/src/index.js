import 'react-native-gesture-handler'
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '@/screens/Login'
import Home from '@/screens/Home'
import Products from '@/screens/Products'

const Stack = createStackNavigator()

const defaultOptions = { header: () => <View /> }

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        ...defaultOptions,
        gestureEnabled: false
      }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        ...defaultOptions,
        gestureEnabled: false
      }}
    />
    <Stack.Screen
      name="Products"
      component={Products}
      options={defaultOptions}
    />
  </Stack.Navigator>
)

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          ...defaultOptions,
          gestureEnabled: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
