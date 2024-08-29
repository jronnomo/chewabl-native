import { Image, StyleSheet, View } from 'react-native';

export default function Logo({ img, height = 250, width = 250 }) {
  return (
    <View style={styles.logoContainer}>
      <Image source={img} style={[styles.reactLogo, { height, width, borderRadius: height / 2 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactLogo: {
    position: 'absolute',
    top: -250,
    left: -45,
    borderWidth: 2, // Optional: Add a border for the circle
    borderColor: '#000', // Optional: Border color for the circle
  },
});
