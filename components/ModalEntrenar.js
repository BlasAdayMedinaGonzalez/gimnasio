import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

// Modal base para usar
const ModalEntrenar = ({ modalVisible, setModalVisible }) => {
  
  let texto = "Siguiente ejercicio";
  // TO DO:
  //  función
  // if (ultimo) {
  //     texto = "Finalizar Entrenamiento"
  //     Consulta Post de los ejercicios a Historial
  //     setModalVisible(!modalVisible)
  // }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Pressable
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyleClose}>X</Text>
          </Pressable>
          <Text style={styles.modalText}>Base de datos: Leg Press</Text>
          <Text style={styles.textDescription}>Descripción</Text>
          <Text style={styles.text}>
            Base de datos: 1.Realiza 3 series de Leg Press{"\n"}2.Repite el
            proceso
          </Text>
          <Pressable
            style={styles.buttonNext}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyleMain}>{texto}</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    height: 800,
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
    marginTop: 580,
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

export default ModalEntrenar;
