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
        <Tab.Navigator>
            <Tab.Screen name="EntrenarScreen" component={EntrenarScreen} />
            <Tab.Screen name="PerfilScreen" component={PerfilScreen} />
            <Tab.Screen name="EjerciciosScreen" component={EjerciciosScreen} />
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