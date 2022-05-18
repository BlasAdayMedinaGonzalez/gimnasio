import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.centered}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </View>
      </View>
      <View style={styles.viewText}>
        <View>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
              marginBottom: 5,
            }}
          >
            username
          </Text>
        </View>
      </View>
      <View style={styles.viewText}>
        <View>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
              marginBottom: 5,
            }}
          >
            ejemplo@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.viewText}>
        <View>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
              marginBottom: 5,
            }}
          >
            .................
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => "pressed"}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    padding: 22,
    marginTop: 22,
  },
  viewText: {
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    padding: 2,
  },
  button: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  }
});

export default RegisterScreen;