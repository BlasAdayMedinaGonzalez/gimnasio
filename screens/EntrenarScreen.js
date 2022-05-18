import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';


const EntrenarScreen = () => {
    return (
        <View style={{ margin: "5%" }}>

            <Text
                style={
                    {
                        fontSize: 15,
                        fontWeight: "bold"
                    }
                }
            >
                Mis entrenamientos
            </Text>
            {/*En cada icono aparecería el Modal*/}
            <View style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginTop: 20
            }}>

                <View style={{alignItems: "center", flexDirection: "row", justifyContent: "space-around"}}>
                    <Text
                        style={
                            {
                                fontWeight: "bold",
                            }
                        }>
                        Legs

                    </Text>
                    <Icon2 style={{ marginLeft: "80%", color: "deepskyblue", borderWidth: 1, borderRadius: 5, padding:4, borderColor: "black" }} name="running" size={25} />
                </View>

                
                <Text>
                    {"\u00A0"}4 x Squat (Barbell){"\n"}
                    {"\u00A0"}3 x Leg Press {"\n"}
                    {"\u00A0"}3 x Standing Calf Raises {"\n"}
                    {"\u00A0"}3 x Leg Extension
                </Text>
            </View>

            <View style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginTop: 20
            }}>

                <View style={{alignItems: "center", flexDirection: "row", justifyContent: "space-around"}}>
                    <Text
                        style={
                            {
                                fontWeight: "bold",
                            }
                        }>
                        Pull

                    </Text>
                    <Icon2 style={{ marginLeft: "80%", color: "deepskyblue", borderWidth: 1, borderRadius: 5, padding:4, borderColor: "black" }} name="running" size={25} />
                </View>

                
                <Text>
                    {"\u00A0"}4 x Squat (Barbell){"\n"}
                    {"\u00A0"}3 x Leg Press {"\n"}
                    {"\u00A0"}3 x Standing Calf Raises {"\n"}
                    {"\u00A0"}3 x Leg Extension
                </Text>
            </View>

            <View style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginTop: 20
            }}>

                <View style={{alignItems: "center", flexDirection: "row", justifyContent: "space-around", width:"100%"}}>
                    <Text
                        style={
                            {
                                fontWeight: "bold",
                            }
                        }>
                        Push

                    </Text>
                    <Icon2 style={{ marginLeft: "80%", color: "deepskyblue", borderWidth: 1, borderRadius: 5, padding:4, borderColor: "black" }} name="running" size={25} />
                </View>

                
                <Text>
                    {"\u00A0"}4 x Squat (Barbell){"\n"}
                    {"\u00A0"}3 x Leg Press {"\n"}
                    {"\u00A0"}3 x Standing Calf Raises {"\n"}
                    {"\u00A0"}3 x Leg Extension
                </Text>
            </View>

        </View>
    )
}


EntrenarScreen.options = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={25} />
    )

}

export default EntrenarScreen;