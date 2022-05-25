import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "expo-dark-mode-switch/build/Elements";

import Icon from "react-native-vector-icons/Ionicons";
import fgetAllexercises from "../services/services";
import fgetAllentrenamientos from "../services/entrenamientos";

import EntrenarScreen from "../screens/EntrenarScreen";
import PerfilScreen from "../screens/PerfilScreen";
import EjerciciosScreen from "../screens/EjerciciosScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InicioScreen from "../screens/InicioScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();
  const [ejercicios, setEjercicios] = useState([]);
  const [entrenamientos, setEntrenamientos] = useState([]);
  const [historial, setHistorial] = useState([]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch("http://192.168.1.130:8000/api/v1/ejercicios")
      .then(res => res.json())
      .then(res => setEjercicios(res))
      .catch((err) => console.log(err))
    fetch("http://192.168.1.130:8000/api/v1/entrenamientos")
      .then(res => res.json())
      .then(res => setEntrenamientos(res))
      .catch((err) => console.log(err))
    fetch("http://192.168.1.130:8000/api/v1/historial")
      .then(res => res.json())
      .then(res => setHistorial(res))
      .catch((err) => console.log(err))
  }, []);

  return (
    <Tab.Navigator initialRouteName="InicioScreen">
      <Tab.Screen
        name="InicioScreen"
        component={InicioScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Login"
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
        children={() => <LoginScreen username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword} />}

      />
      <Tab.Screen
        name="Registro"
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
        children={() => <RegisterScreen username={username} setUsername={setUsername} />}
      />
      <Tab.Screen
        name="Perfil"
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InicioScreen");
              }}
            >
              <Icon name="log-out-outline" size={25} />
            </TouchableOpacity>
          ),
          tabBarIcon: () => <Icon name="person" size={25} />,
        }}
        children={() => <PerfilScreen username={username} historial={historial} />}

      />
      <Tab.Screen
        name="Entrenar"
        options={EntrenarScreen.options}
        children={() => <EntrenarScreen entrenamientos={entrenamientos} />}
      />
      <Tab.Screen
        name="Ejercicios"
        options={EjerciciosScreen.options}
        children={() => <EjerciciosScreen ejercicios={ejercicios} />}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
