import { Image, StyleSheet, View } from 'react-native';

export default function Logo({ img, height, width }) {
  return (
    <View style={styles.logoContainer}>
      <Image source={img} style={[styles.reactLogo, { height: height || 250, width: width || 250 }]} />
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
    top: 0,
    left: 0,
  },
});
