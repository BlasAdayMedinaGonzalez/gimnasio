import React, { useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import ModalEntrenar from "../components/ModalEntrenar";

const EntrenarScreen = ({ entrenamientos }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [entrenamientoModal, setEntrenamientoModal] = useState([]);
  const [count, setCount] = useState(0);

  const [entrenamientosList, setEntrenamientosList] = useState();

  useEffect(() => {
    // console.log('====================================');
    // console.log(entrenamientos.data);
    // console.log('====================================');
    // setEntrenamientosList(entrenamientos.data);
    // console.log('====================================');
    // console.log(entrenamientosList);
    // console.log('====================================');
  }, []);

  return (
    <View style={{ margin: "5%" }}>
      <Text style={styles.title}>Mis entrenamientos</Text>

      <FlatList
        data={entrenamientos.data}
        renderItem={(itemData) => {
          const index = itemData.index;
          return (
            <View itemData={itemData.item} style={styles.sectionCase}>
              <View style={styles.sectionItems}>
                <ModalEntrenar
                  count={count}
                  setCount={setCount}
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  entrenamientoModal={itemData.item} // HERE
                  setEntrenamientoModal={setEntrenamientoModal}
                  itemData={itemData.index}
                />
                <Text style={styles.sectionText}>{itemData.item.nombre}</Text>
                <TouchableHighlight
                  style={{ marginLeft: "70%" }}
                  onPress={() => {
                    setModalVisible(true);
                    setEntrenamientoModal(itemData.item);
                  }}
                >
                  <Icon2 style={styles.sectionIcon} name="running" size={25} />
                </TouchableHighlight>
                <FlatList />
              </View>
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
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionText: {
    fontWeight: "bold",
    fontSize:16
  },
  sectionIcon: {
    color: "deepskyblue",
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    borderColor: "black",
  },
});

EntrenarScreen.options = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" color={tintColor} size={25} />
  ),
};

export default EntrenarScreen;
