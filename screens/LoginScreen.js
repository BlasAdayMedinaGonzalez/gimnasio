import { View, Text, Image, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Back from '../assets/back.png'

export default function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const validateUser = (user, pass) => {
    const url = 'http://192.168.1.130:8000/api/v1/users/' + user;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.data.length > 0) {
          setUsernameValid(true);

          const url2 = 'http://192.168.1.130:8000/api/v1/password/' + pass;
          fetch(url2)
            .then(res => res.json())
            .then(res => {
              if (res.data.length > 0) {
                res.data.forEach(obj => {
                  if (obj.Username === username) {
                    setPasswordValid(true);
                    navigation.navigate('Entrenar');
                  }
                })

              }
              console.log('====================================');
              console.log('Contraseña validada:' + passwordValid);
              console.log('====================================');

              
            })
            .catch(err => { console.log('Contraseña incorrecta') })


        }
      })
      .catch(err => { console.log('El usuario introducido no existe.') })



  }
  return (
    <View style={styles.root}>
      <Pressable style={{ alignSelf: 'flex-start' }} onPress={() => navigation.navigate('InicioScreen')}>
        <Image source={Back} style={{ width: 25, height: 25 }} />
      </Pressable>

      <View style={styles.input}>
        <TextInput
          placeholder='Usuario'
          value={username}
          onChangeText={(username) => { setUsername(username) }}
          placeholderTextColor={'black'}
          rules={{ required: 'Usuario incorrecto.' }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={(password) => { setPassword(password) }}
          placeholder='Contraseña'
          placeholderTextColor={'black'}
        />
      </View>
      <Pressable style={styles.button} onPress={() => validateUser(username, password)}>
        <Text style={styles.text}>Acceder</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    height: 30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    color: 'black'
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,

    backgroundColor: '#35AAF2'
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  }
})