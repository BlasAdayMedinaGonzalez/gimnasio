import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';


const EntrenarScreen = () => {
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

        <Text
            style={
                {
                    fontSize:15,
                    fontWeight: "bold"                      
                }
            }
        >
            Mis entrenamientos
        </Text>
        <View style={{
            border: "1px solid",
            borderRadius:"10px",
            marginTop: "10px",
            padding:"10px"
            }}>
            
            <View style={{flex: 1, alignItems: "center", flexDirection: "row", marginBottom: "20px"}}>
                <Text 
                    style={
                        {fontWeight: "bold",
                        }
                    }>
                    Legs

                </Text>
                <Icon2 style= {{marginLeft: "80%", color: "deepskyblue",  border: "1px solid", borderColor: "black", padding: "10px", borderRadius: "10px"}} name="running" size={25}/>
            </View>
            
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
        <View style={{
            border: "1px solid",
            borderRadius:"10px",
            marginTop: "10px",
            padding:"10px"
            }}>
            <View style={{flex: 1, alignItems: "center", flexDirection: "row", marginBottom: "20px"}}>
                <Text 
                    style={
                        {fontWeight: "bold",
                        }
                    }>
                    Hammer curl

                </Text>
                <Icon2 style= {{marginLeft: "65%", color: "deepskyblue",  border: "1px solid", borderColor: "black", padding: "10px", borderRadius: "10px"}} name="running" size={25}/>
            </View>
            
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
        <View style={{
            border: "1px solid",
            borderRadius:"10px",
            marginTop: "10px",
            padding:"10px"
            }}>
            <View style={{flex: 1, alignItems: "center", flexDirection: "row", marginBottom: "20px"}}>
                <Text 
                    style={
                        {fontWeight: "bold",
                        }
                    }>
                    Last Pulldown

                </Text>
                <Icon2 style= {{marginLeft: "65%", color: "deepskyblue",  border: "1px solid", borderColor: "black", padding: "10px", borderRadius: "10px"}} name="running" size={25}/>
            </View>
            
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


EntrenarScreen.options = {
    tabBarIcon:({tintColor})=>(
        <Icon name="home" color={tintColor} size={25}/>
    )
        
}

export default EntrenarScreen;