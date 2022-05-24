import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Modal, TouchableHighlight, FlatList } from "react-native";



const ModalEntrenar = ({ modalVisible, setModalVisible, entrenamientoModal, setEntrenamientoModal, count, setCount}) => {
  const [descripciones, setDescripciones] = useState("");
  const {entrenamiento1, entrenamiento2, entrenamiento3} = entrenamientoModal;
  const entrenamientos = [entrenamiento1, entrenamiento2, entrenamiento3];
  const [titulos, setTitulos] = useState("");
  const [textoButton, setTextoButton] = useState("Iniciar entrenamiento")

  const next = () => {
    setCount(0);
    setTitulos(entrenamientos[count]);
    if (count < entrenamientos.length) {
      setTextoButton("Siguiente ejercicio");
      setCount(count+1)
    } 
    if (count >= entrenamientos.length) {
      console.log(entrenamientos[count]);
      setTextoButton("Finalizar entrenamiento");
      setModalVisible(!modalVisible);
      // consulta post
    }
    if (count > entrenamientos.length) {
      console.log(entrenamientos[count]);
      setTextoButton("Finalizar entrenamiento");
      setModalVisible(!modalVisible);
      // consulta post
    }
    
    console.log('====================================');
    console.log(entrenamientos.length-1);
    console.log('====================================');
    // if (count == entrenamientos.length) {
      
    // }
    console.log(count);
    
  }
  
  return (
    <View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setTitulos(entrenamientoModal.entrenamiento1)
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Pressable
            style={styles.buttonClose}
            onPress={() => {setTitulos(entrenamientoModal.entrenamiento1); setModalVisible(!modalVisible)}}
          >
            <Text style={styles.textStyleClose}>X</Text>
          </Pressable>
          <Text style={styles.modalText}>{titulos}</Text>
          {/* <Text style={styles.textDescription}>Inicio</Text> */}
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
