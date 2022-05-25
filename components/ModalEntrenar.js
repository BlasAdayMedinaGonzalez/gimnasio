import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, TouchableHighlight, ScrollView } from "react-native";
import axios from 'axios';

const ModalEntrenar = ({ modalVisible, setModalVisible, entrenamientoModal }) => {
  const [descripcion, setDescripcion] = useState("");
  const { ejercicio1, ejercicio2, ejercicio3, ejercicio4, ejercicio5, descripcion1, descripcion2, descripcion3, descripcion4, descripcion5 } = entrenamientoModal;
  const ejercicios = [ejercicio1, ejercicio2, ejercicio3, ejercicio4, ejercicio5];
  const descripciones = [descripcion1, descripcion2, descripcion3, descripcion4, descripcion5];
  const [titulos, setTitulos] = useState('ENTRENAMIENTO');
  const [textoButton, setTextoButton] = useState("Iniciar entrenamiento");
  const [count, setCount] = useState(0);

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  const fecha = date + '/' + month + '/' + year;

  const historialEntrenamiento = {
    "fecha": fecha,
    "usuario": '614',
    "entrenamiento": entrenamientoModal.entrenamiento_id
  }

  const next = () => {
    console.log('====================================');
    console.log(entrenamientoModal);
    console.log('====================================');
    setTitulos(ejercicios[count]);
    setDescripcion(descripciones[count]);
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
      setDescripcion('');

      axios.post('http://192.168.1.130:8000/api/v1/entrenamiento', historialEntrenamiento)
        .then(console.log('Entrenamiento finalizado'))
        .catch(err => console.error(err))
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        keyExtractor={Math.random() * 100}
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
          
          <ScrollView  contentContainerStyle={{ flexGrow: 1, height: '100%' }} showsVerticalScrollIndicator={false}>
            
          
          <Text style={styles.text}>
          {descripcion}
        </Text>
          
        

      </ScrollView>
          
          

          <TouchableHighlight
            style={styles.buttonNext}
            onPress={() => next()}
          >
            <Text style={styles.textStyleMain}>{textoButton}</Text>
          </TouchableHighlight>
        </View>
      </Modal>
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
  text: {
    backgroundColor: "grey"
  }
});

export default ModalEntrenar;
