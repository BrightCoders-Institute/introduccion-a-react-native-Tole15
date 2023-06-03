import React from 'react';
import { View, StyleSheet } from 'react-native';
import Lista from './Lista';

function App() {
  const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  return (
    <View style={styles.container}>
      <Lista items={elementos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
