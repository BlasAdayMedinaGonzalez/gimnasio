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
            <View style={styles.content}>
                <View style={styles.contentAlign}>
                    <Icon name="person-circle-sharp" size={40} />
                    <Text style={styles.textPerfil}>Juan Ochando</Text>
                </View>
                <View style={styles.contentAlign}>
                    <Switch value={value} onChange={value => setValue(value)} />
                </View>
            </View>
            <Text style={styles.textTitle}>Historial</Text>
            <View style={styles.case}>
                <Text style={styles.text}>Legs</Text>
                <Text>
                    martes, 15 mar{"\n"}
                </Text>
                <Text style={styles.text}> Ejercicios </Text>
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

const styles = StyleSheet.create({
    content: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginBottom: 20
    },
    contentAlign: {
        flexDirection: "row", 
        alignItems: "center" 
    },
    textPerfil : {
        fontSize: 20,
        fontWeight: "bold",
    },
    textTitle: {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: "bold"
    },
    case: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    text: {
        fontWeight: "bold"
    }
});

PerfilScreen.options = {
    headerRight: ({ tintColor }) => (
        
        <>
            <TouchableOpacity onPress={
                () => {
                    useNavigation().navigate('InicioScreen')
                }
            }>
                <Icon name="log-out-outline" color={tintColor} size={25} />
            </TouchableOpacity>
        </>
    ),
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person" color={tintColor} size={25} />
    )
}

export default PerfilScreen;