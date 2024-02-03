import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text>{'\n'}</Text><Text>{'\n'}</Text>
       <Text style={styles.texto}>Español</Text>
      <Text>{'\n'}</Text><Text>{'\n'}</Text><Text>{'\n'}</Text><Text>{'\n'}</Text>
      <Image source={require('./assets/Icono.png')} style={styles.logo} />
      <View style={{flex: 0.2}}></View> 

      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder={'Nombre de usuario, correo o celular'}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder={'Contraseña'}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title={'Iniciar sesión'}
          onPress={handleLogin}
          color="#0095f6"
        />
      </View>
      <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      
      <View style={{flex: 1}}></View> 
      
      <View style={{alignItems: 'center', marginBottom: 20, borderColor: '#0095f6', borderWidth: 1, borderRadius: 15, padding: 10, width: '100%'}}>
        <Text style={[styles.newAccount,{color:'#0095f6'}]}>     Crear cuenta nueva    </Text>
      </View> 
      <Image source={require('./assets/meta.png')} style={styles.lmeta} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30, 
  },
  logo: {
    width: 70, 
    height: 70, 
    marginBottom: 50, 
  },
  lmeta: {
    width: 33, 
    height: 22, 
    marginBottom: 1, 
  },
  input: {
    height: 40,
    width: '100%', 
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    width: '100%', 
    borderRadius: 10, 
    overflow: 'hidden', 
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#fff',
    marginTop: 15,
  },
  texto: {
    color: '#fff',
    marginTop: 15,
  },
  newAccount: {
    color: '#fff',
    marginTop: 1,

  },
});
