import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


const EntrenarScreen = () => {
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
                Home Screen
            </Text>
        </View>
    )
}


EntrenarScreen.options = {
    tabBarIcon:({tintColor})=>(
        <Icon name="home" color={tintColor} size={25}/>
    )
        
}

export default EntrenarScreen;