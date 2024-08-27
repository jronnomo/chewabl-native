import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image, StyleSheet } from 'react-native';

export default function RestaurantLogo() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ dark: '#1A1C1F', light: '#181a1c' }}
      headerImage={
        <Image source={require('@/assets/images/IMG_2015.jpg')} style={styles.reactLogo} />
      }></ParallaxScrollView>
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
    height: 300,
    width: 300,
    position: 'absolute',
    top: '-5%',
    left: '10%',
  },
});
