import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Switch from 'expo-dark-mode-switch';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from "expo-dark-mode-switch/build/Elements";


const PerfilScreen = () => {
    const [value, setValue] = React.useState(true);
    
    const navigation = useNavigation();
    return (
        <View style={{ margin: "5%" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="person-circle-sharp" size={40} />
                    <Text
                        style={
                            {
                                fontSize: 20,
                                fontWeight: "bold",
                            }
                        }
                    >
                        Juan Ochando
                    </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Switch value={value} onChange={value => setValue(value)} />
                </View>
            </View>

            <Text
                style={
                    {
                        marginBottom: 10,
                        fontSize: 15,
                        fontWeight: "bold"
                    }
                }
            >
                Historial
            </Text>
            <View style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10
            }}>
                <Text
                    style={
                        {
                            fontWeight: "bold",
                        }
                    }>
                    Legs
                </Text>
                <Text>
                    martes, 15 mar{"\n"}
                </Text>
                <Text
                    style={
                        { fontWeight: "bold" }
                    }>
                    Ejercicios

                </Text>
                <Text>
                    {"\u00A0"} 4 x Squat (Barbell){"\n"}
                    {"\u00A0"} 3 x Leg Press {"\n"}
                    {"\u00A0"} 3 x Standing Calf Raises {"\n"}
                    {"\u00A0"} 3 x Leg Extension
                </Text>
            </View>
        </View>
    )
}

PerfilScreen.options = {
    headerRight: ({ tintColor }) => (
        
        <>
            <TouchableOpacity onPress={
                () => {
                    useNavigation().navigate('InicioScreen')
                }
            }>
                <Icon name="log-out-outline" style={{}} color={tintColor} size={25} />
            </TouchableOpacity>
        </>
    ),
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person" color={tintColor} size={25} />
    )
}

export default PerfilScreen;