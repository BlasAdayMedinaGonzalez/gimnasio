import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "expo-dark-mode-switch/build/Elements";
import ModalEntrenar from "../components/ModalEntrenar";


const PerfilScreen = ({ username, historial }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [historialState, setHisorial] = useState(historial.data);


    const navigation = useNavigation();

    useEffect(() => {
        
      }, []);
    
    return (
        <View style={{ margin: "5%" }}>
            <View style={styles.content}>
                <View style={styles.contentAlign}>
                    <Icon name="person-circle-sharp" size={40} />
                    <Text style={styles.textPerfil}>{username}</Text>
                </View>
                <View style={styles.contentAlign}>

                </View>
            </View>
            <View style={{ margin: "5%" , height: "89%"}}>
                <Text style={styles.title}>Historial</Text>

                <FlatList
                    data={historial.data}
                    renderItem={(itemData) => {
                        return (
                            
                            <View itemData={itemData.item} style={styles.sectionCase}>
                                <View style={styles.sectionItems}>
                                    
                                    <Text style={styles.sectionText}>{itemData.item.nombre}</Text>
                                    <FlatList />
                                </View>
                                <Text style={styles.fecha}>{itemData.item.fecha}</Text>
                                <Text style={styles.sectionText}>Ejercicios</Text>
                                <Text>
                                    {"\u00A0"}
                                    {itemData.item.ejercicio1}
                                    {"\n"}
                                    {"\u00A0"}
                                    {itemData.item.ejercicio2}
                                    {"\n"}
                                    {"\u00A0"}
                                    {itemData.item.ejercicio3}
                                    {"\n"}
                                    {"\u00A0"}
                                    {itemData.item.ejercicio4}
                                    {"\n"}
                                    {"\u00A0"}
                                    {itemData.item.ejercicio5}
                                    {"\n"}
                                </Text>
                            </View>
                        );
                    }}
                />
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
    textPerfil: {
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
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
    sectionCase: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    sectionItems: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    sectionText: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10
    },
    fecha: {
        fontSize: 12,
        marginBottom: 10
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