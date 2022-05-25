import React, { useState } from "react";
import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ModalEjercicio from "../components/ModalEjercicio";

const EjerciciosScreen = ({ ejercicios }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ejercicioModal, setEjercicioModal] = useState([]);
  return (
    
    <View style={styles.centered}>
      <ModalEjercicio
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      ejercicioModal = {ejercicioModal}
              />
      <FlatList
        data={ejercicios.data}
        renderItem={(itemData) => {
          return (
            <View itemData={itemData.item} style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {setModalVisible(true); setEjercicioModal(itemData.item)}}
              >
                <Text style={styles.textStyleModal}>{itemData.item.nombre}</Text>
                <Text style={styles.textCate}>{itemData.item.categoría}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    marginHorizontal: 10,
  },
  button: {
    borderRadius: 20,
  },
  buttonOpen: {
    textAlign: "center",
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
  },
  buttonClose: {
    width: 15,
    borderRadius: 10,
  },
  buttonNext: {
    marginTop: 600,
    backgroundColor: "#2196F3",
    padding: 5,
    borderRadius: 5,
  },
  textStyleClose: {
    textAlign: "center",
    color: "white",
    backgroundColor: "red",
    fontWeight: "bold",
  },
  textStyleMain: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textStyleModal: {
    fontWeight: "bold",
    textAlign: "center",
  },
  textDescription: {
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  textCate: {
    textAlign: "center",
  },
});

EjerciciosScreen.options = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="barbell" color={tintColor} size={25} />
  ),
};

export default EjerciciosScreen;
