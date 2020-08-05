import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from './assets/instagram.png';

import Feed from './pages/Feed';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Feed" 
          component={Feed} 
          options={{
            headerTitle: <Image source={logo}/>,   
            headerStyle: {
              backgroundColor: '#F5F5F5'
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default Routes;