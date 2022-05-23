import { View, Text, Image, Pressable, TextInput, StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Back from '../assets/back.png'

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Pressable style={{alignSelf: 'flex-start'}} onPress={() => navigation.navigate('InicioScreen')}>
        <Image source={Back} style={{width: 25, height: 25}}/>
      </Pressable>
      
      <View style={styles.input}>
        <TextInput
          placeholder='Usuario'
          placeholderTextColor={'black'}
          rules={{ required: 'Usuario incorrecto.' }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
        secureTextEntry
          placeholder='Contraseña'
          placeholderTextColor={'black'}
        />
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Entrenar')}>
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