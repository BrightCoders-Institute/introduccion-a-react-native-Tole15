import React from 'react';
import { View, StyleSheet } from 'react-native';
import Contador from './Contador';

function App() {
  return (
    <View style={styles.container}>
      <Contador />
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
