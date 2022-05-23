import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ModalEjercicio from "../components/ModalEjercicio";


const EjerciciosScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centered}>
      <ModalEjercicio  modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    marginHorizontal: 10
  }
});

EjerciciosScreen.options = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="barbell" color={tintColor} size={25} />
  ),
};

export default EjerciciosScreen;
