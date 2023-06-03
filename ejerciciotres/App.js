import React from 'react';
import { View } from 'react-native';
import Usuario from './Usuario';

function App() {
  const nombreUsuario = 'César Tolentino';

  return (
    <View>
      <Usuario nombre={nombreUsuario} />
    </View>
  );
}

export default App;