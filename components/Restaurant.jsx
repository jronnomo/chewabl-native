import { Text, View, StyleSheet } from 'react-native';
import RestaurantLogo from '@/components/RestaurantLogo';

export default function Restaurant({ restaurant, index }) {
  if (!restaurant) {
    return (
      <View style={styles.restaurantContainer}>
        <Text>No restaurants available</Text>
      </View>
    );
  }

  return (
    <View style={styles.restaurantContainer}>
      <RestaurantLogo />
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
