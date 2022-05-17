import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


//screens

import EntrenarScreen from "../screens/EntrenarScreen";
import PerfilScreen from "../screens/PerfilScreen";
import EjerciciosScreen from "../screens/EjerciciosScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Entrenar">
            <Tab.Screen name="Perfil" component={PerfilScreen} options={PerfilScreen.options} />
            <Tab.Screen name="Entrenar" component={EntrenarScreen} options={EntrenarScreen.options} />
            <Tab.Screen name="Ejercicios" component={EjerciciosScreen} options={EjerciciosScreen.options} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}