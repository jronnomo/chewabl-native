import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR } from '@/assets/color_theme';

export function NavButton({ style, children, color, navigateTo, ...rest }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => router.push('/' + navigateTo)}
          style={[styles.wrapper, styles.touchableButton]}>
          <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  touchableButton: {
    backgroundColor: PRIMARY_COLOR,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 10,
  },
});
