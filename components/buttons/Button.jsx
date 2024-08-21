import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

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
        {/* <View style={{ marginVertical: 10 }} />
        <Pressable
          onPress={() => {
            console.log('press');
          }}>
          {({ pressed }) => (
            <View style={[styles.wrapper, { backgroundColor: pressed ? '#0476a0' : '#1146aa' }]}>
              <Text style={[styles.textStyle, { color: pressed ? '#fafafa' : '#aaffaa' }]}>Pressable Button</Text>
            </View>
          )}
        </Pressable> */}
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
    backgroundColor: '#FF0000',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 10,
  },
});
