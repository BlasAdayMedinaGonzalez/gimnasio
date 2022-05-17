import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


const EjerciciosScreen = () => {
    return (
        <View>
            <Text
                style={
                    {
                        fontSize:30,
                        textAlign:"center",
                        marginTop:"20%"
                    }
                }
            >
                Ejercicios Screen
            </Text>
        </View>
    )
}

EjerciciosScreen.options = {

    tabBarIcon:({tintColor})=>(
        <Icon name="barbell" color={tintColor} size={25}/>
    )
}

export default EjerciciosScreen;