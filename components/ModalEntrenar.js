import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Modal, TouchableHighlight, FlatList } from "react-native";



const ModalEntrenar = ({ modalVisible, setModalVisible, entrenamientoModal, itemData, setEntrenamientoModal, countt, setCountt }) => {
  const [descripciones, setDescripciones] = useState("");
  const { ejercicio1, ejercicio2, ejercicio3 } = entrenamientoModal;
  const ejercicios = [ejercicio1, ejercicio2, ejercicio3];
  const [titulos, setTitulos] = useState('ENTRENAMIENTO');
  const [textoButton, setTextoButton] = useState("Iniciar entrenamiento");
  const [count, setCount] = useState(0);
  

  const next = () => {
    
    setTitulos(ejercicios[count]);
    if (count < ejercicios.length) {
      setTextoButton("Siguiente ejercicio");
      setCount(count + 1)
    }
    if (count == (ejercicios.length - 1)) {
      setTextoButton("Finalizar entrenamiento");
    }
    if (count >= ejercicios.length) {
      setTextoButton("Iniciar entrenamiento");
      setModalVisible(!modalVisible);
      setCount(0)
      setTitulos('ENTRENAMIENTO')
      // consulta post
    }
  }

  return (
    <View style={styles.centeredView}>
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
            onPress={() => { setTitulos(ejercicio1); setModalVisible(!modalVisible) }}
          >
            <Text style={styles.textStyleClose}>X</Text>
          </Pressable>
          <Text style={styles.modalText}>{titulos}</Text>
          <Text style={styles.text}>
            {descripciones}
          </Text>
          <TouchableHighlight
            style={styles.buttonNext}
            onPress={() => next()}
          >
            <Text style={styles.textStyleMain}>{textoButton}</Text>
          </TouchableHighlight>
        </View>
      </Modal>
      <FlatList data={entrenamientoModal} renderItem={(itemData) => {

      }} />

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {

    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    height: '80%',
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
