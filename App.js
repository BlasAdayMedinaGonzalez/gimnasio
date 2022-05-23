import React, {useEffect, useState} from "react";
import { StatusBar } from 'react-native'
import fgetAllexercises from "./services/services"
import Navigation from "./navigation/Navigation";

export default function App() {
  const [ejercicios, setEjercicios] = useState([]);
  useEffect(() =>{
    fgetAllexercises().then((res) => {
      console.log(res.data);
      setEjercicios(res.data);
    })
  },[]);
  return (
    <Navigation ejercicios={ejercicios} />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
