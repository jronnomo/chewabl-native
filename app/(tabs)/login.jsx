import { View, StyleSheet, Button, Text } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.background}>
      <Button title='Swipe' onClick={() => navigation.navigate('Swipe')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
});
