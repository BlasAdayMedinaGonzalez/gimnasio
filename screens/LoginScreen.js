import { View, Text, Modal, Image, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Back from '../assets/back.png'

export default function LoginScreen({ username, password, setUsername, setPassword }) {
  const navigation = useNavigation();

  const [modalValidateVisible, setModalValidateVisible] = useState(false);


  const validateUser = (user, pass) => {
    const url = 'http://192.168.1.130:8000/api/v1/users/' + user;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.data.length > 0) {
          const url2 = 'http://192.168.1.130:8000/api/v1/password/' + pass;
          fetch(url2)
            .then(res => res.json())
            .then(res => {
              if (res.data.length > 0) {
                res.data.forEach(obj => {
                  if (obj.nombre === username) {

                    navigation.navigate('Entrenar');
                  }
                })
              }
            })
            .catch(err => { console.log('Contraseña incorrecta');  })


        } else {
          setModalValidateVisible()
        }
      })
      .catch(err => { console.log(err) })



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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalValidateVisible}
        onRequestClose={() => {
          setModalValidateVisible(!modalValidateVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Usuario o contraseña incorrecta</Text>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => setModalValidateVisible(!modalValidateVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  title: { 
    marginBottom: 20,
    fontSize: 17,
    color: 'red'
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})