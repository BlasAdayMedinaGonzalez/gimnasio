import React, {useSate} from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";


// Modal base para usar
const ModalEjercicio = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyleClose}>X</Text>
            </Pressable>
            <Text style={styles.modalText}>Base de datos: Leg Press</Text>
            <Text style={styles.textDescription}>Base de datos: Descripción</Text>
            <Text style={styles.text}>Base de datos: 1.Realiza 3 series de Leg Press{"\n"}2.Repite el proceso</Text>
            <Pressable
              style={styles.buttonNext}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyleMain}>Siguiente Ejercicio</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyleModal}>Leg Press</Text>
        <Text style={styles.textCate}>Piernas</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
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
    borderWidth: 2
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
    fontWeight: "bold"
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

export default ModalEjercicio;
