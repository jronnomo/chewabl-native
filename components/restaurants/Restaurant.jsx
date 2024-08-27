import { Text, View, StyleSheet } from 'react-native';
import Logo from '@/components/Logo';

export default function Restaurant({ restaurant }) {
  if (!restaurant) {
    return (
      <View style={styles.restaurantContainer}>
        <Text>No restaurants available</Text>
      </View>
    );
  }

  return (
    <View style={styles.restaurantContainer}>
      <Logo img={require('@/assets/images/IMG_2015.jpg')} height={300} width={300} />
      <Text>{restaurant.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 60,
    paddingLeft: 60,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
