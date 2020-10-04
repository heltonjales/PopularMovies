import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/Splash'
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import EsqueciSenha from '../pages/EsqueciSenha';
import MainTab from '../stacks/MainTab';
import Movie from '../pages/Movies/index';


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{headerShown:false}}  
      >
        
    <Stack.Screen name="Splash" component={Splash}  />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Cadastro" component={Cadastro} />
    <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="Movie" component={Movie} />
  </Stack.Navigator>
);