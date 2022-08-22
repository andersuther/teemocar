import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cadastro from '../pages/Cadastro';

const AppStack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AuthStack.Screen name="Cadastro" component={Cadastro}/>
        </AppStack.Navigator>
    )
}