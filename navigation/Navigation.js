import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "expo-dark-mode-switch/build/Elements";

import Icon from 'react-native-vector-icons/Ionicons';


//screens

import EntrenarScreen from "../screens/EntrenarScreen";
import PerfilScreen from "../screens/PerfilScreen";
import EjerciciosScreen from "../screens/EjerciciosScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InicioScreen from "../screens/InicioScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator initialRouteName="Perfil">
            <Tab.Screen
                name="InicioScreen"
                component={InicioScreen}
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen
                name="Registro"
                component={RegisterScreen}
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    headerRight: () =>

                        <TouchableOpacity onPress={
                            () => {
                                navigation.navigate('InicioScreen')
                            }
                        }>
                            <Icon name="log-out-outline" style={{}}  size={25} />
                        </TouchableOpacity>
                    , tabBarIcon: () =>
                        <Icon name="person" size={25} />

                }} />
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