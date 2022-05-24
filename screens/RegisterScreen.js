import { View, Text, Image, Pressable, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import Back from '../assets/back.png'
import axios from 'axios';

export default function LoginScreen() {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  var cors = require('cors');

  const [username, setUsername] = useState('');
  const [passwords, setPasswords] = useState('');
  const [email, setEmail] = useState('');

  const user = {
    "username": username,
    "email": email,
    "passwords": passwords
  }

  const onSignUpPressed = (user) => {
    console.log(user);
    axios.post('http://192.168.1.130:8000/api/v1/user', user)
    .then(() => navigation.navigate('Entrenar'))
    .catch(err => console.error(err))
  }

  return (
    <View style={styles.root}>
      <Pressable style={{alignSelf: 'flex-start'}} onPress={() => navigation.navigate('InicioScreen')}>
        <Image source={Back} style={{width: 25, height: 25}}/>
      </Pressable>
      
      <View style={styles.input}>
        <TextInput
          placeholder='Usuario'
          placeholderTextColor={'black'}
          onChangeText={(username) => {setUsername(username)}}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder='Email'
          placeholderTextColor={'black'}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
        secureTextEntry
          placeholder='Contraseña'
          placeholderTextColor={'black'}
          onChangeText={(passwords) => setPasswords(passwords)}
        />
      </View>
      <Pressable style={styles.button} onPress={handleSubmit(() => onSignUpPressed(user))}>
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