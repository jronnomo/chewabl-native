import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.background}>
      <Text>Welcome to Login!</Text>
      <Link href='/signup'>Or Sign Up Here</Link>
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
