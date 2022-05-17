import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


const PerfilScreen = () => {
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
                Perfil Screen
            </Text>
        </View>
    )
}

PerfilScreen.options = {
    tabBarIcon:({tintColor})=>(
        <Icon name="person" color={tintColor} size={25}/>
    )
}

export default PerfilScreen;