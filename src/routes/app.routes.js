import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Cadastro from '../pages/Cadastro';
import Bike from "../pages/Bikes";
import Sobre from "../pages/Sobre";

const AppStack = createNativeStackNavigator();

function AppRoutes() {
    return (
        <AppStack.Navigator>

            <AppStack.Screen
                name="Home" component={Home}
                options={{ headerShown: false }}
            />

            <AppStack.Screen
                name="Cadastro" component={Cadastro}
                options={{ headerShown: false }}

            />
            <AppStack.Screen
                name="Bike" component={Bike}
                options={{ headerShown: false }}
            />

            <AppStack.Screen
                name="Sobre" component={Sobre}
                options={{ headerShown: false }}
            />

        </AppStack.Navigator>
    )
}

export default AppRoutes;