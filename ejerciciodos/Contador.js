import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contadorText}>Contador: {contador}</Text>
      <View style={styles.botonesContainer}>
        <Button title="Incrementar" onPress={incrementar} />
        <Button title="Decrementar" onPress={decrementar} />
        <Button title="Reiniciar" onPress={reiniciar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contadorText: {
    fontSize: 24,
    marginBottom: 10,
  },
  botonesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default Contador;
