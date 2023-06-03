import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Lista(props) {
  const items = props.items.map((item, index) => (
    <Text key={index}>{item}</Text>
  ));

  return <View style={styles.container}>{items}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lista;
