import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Saludo() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola, Soy César Alejandro Tolentino Mendoza y estoy aprendiendo react native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Saludo;
