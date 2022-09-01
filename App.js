import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes/index';
import { StatusBar } from 'react-native';

export default function teemocar() {
 return (
   <NavigationContainer>
    <StatusBar backgroundColor="#131313"/>
    <Routes/>
    </NavigationContainer>
  );
}