import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.background}>
      <Text>Login</Text>
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
