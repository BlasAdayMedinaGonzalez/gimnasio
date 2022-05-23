import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import ModalEntrenar from "../components/ModalEntrenar";

const EntrenarScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ margin: "5%" }}>
      <Text style={styles.title}>
        Mis entrenamientos
      </Text>
      <View style={styles.sectionCase}>
        <View style={styles.sectionItems}>
          <Text style={styles.sectionText}>Legs</Text>
          <ModalEntrenar modalVisible={modalVisible} setModalVisible={setModalVisible} />
          <TouchableHighlight style={{ marginLeft: "80%" }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Icon2 style={styles.sectionIcon} name="running" size={25} />
          </TouchableHighlight>
        </View>
        <Text>
          {"\u00A0"}4 x Squat (Barbell){"\n"}
          {"\u00A0"}3 x Leg Press {"\n"}
          {"\u00A0"}3 x Standing Calf Raises {"\n"}
          {"\u00A0"}3 x Leg Extension
        </Text>
      </View>
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
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    sectionText: {
        fontWeight: "bold",
    },
    sectionIcon: {
        color: "deepskyblue",
        borderWidth: 1,
        borderRadius: 5,
        padding: 4,
        borderColor: "black",
    }
});

EntrenarScreen.options = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" color={tintColor} size={25} />
  ),
};

export default EntrenarScreen;
