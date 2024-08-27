import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image, StyleSheet } from 'react-native';

export default function Logo({ img, height, width }) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ dark: '#1A1C1F', light: '#181a1c' }}
      headerImage={<Image source={img} style={[styles.reactLogo, { height, width }]} />}></ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    position: 'absolute',
    top: '-5%',
    left: '10%',
  },
});
