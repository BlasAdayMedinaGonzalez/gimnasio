import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import Switch from 'expo-dark-mode-switch';
import Icon from 'react-native-vector-icons/Ionicons';


const PerfilScreen = () => {
    const [value, setValue] = React.useState(true);
    return (
        <View style={{margin: "5%"}}>
            <Text
                style={
                    {
                        fontSize:20,
                        fontWeight: "bold",
                        textAlign:"center"
                    }
                }
            >           
            </Text>

            <View style={{flex: 1, alignItems: "center", flexDirection: "row", marginBottom: "20px"}}>
                <Icon name="person-circle-sharp" size={40}/>
                <Text
                    style={
                        {
                            fontSize:20,
                            fontWeight: "bold",
                            
                        }
                    }
                >
                    
                    Juan Ochando
                    
                </Text>
                <View style={{alignItems: "flex-end"}}>
                    <Switch style={{marginLeft: "10px", marginBottom: "10px"}} value={value} onChange={value => setValue(value)} />
                </View>
                
            </View>
            
            <Text
                style={
                    {
                        fontSize:15,
                        fontWeight: "bold"                      
                    }
                }
            >
                Historial
            </Text>
            <View style={{
                border: "1px solid",
                borderRadius:"10px",
                marginTop: "10px",
                padding:"10px"
                }}>
                <Text 
                    style={
                        {fontWeight: "bold",
                        }
                    }>
                    Legs

                </Text>
                <Text>
                    martes, 15 mar{"\n\n"}
                </Text>
                <Text 
                    style={
                        {fontWeight: "bold"}
                    }>
                    Ejercicios

                </Text>
                <Text>
                    4 x Squat (Barbell){"\n"}
                    3 x Leg Press {"\n"}
                    3 x Standing Calf Raises {"\n"}
                    3 x Leg Extension
                </Text>
            </View>
        </View>
    )
}

PerfilScreen.options = {
    headerRight: ({tintColor}) => (
        <>
            <Icon name="log-out-outline" style={{marginRight: "10px"}} color={tintColor} size={25}/>
        </>
      ),
    tabBarIcon:({tintColor})=>(
        <Icon name="person" color={tintColor} size={25}/>
    )
}

export default PerfilScreen;