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
      <Logo img={require('@/assets/images/restaurants/carrabas.jpg')} />
      <Text>{restaurant.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantContainer: {
    paddingTop: 0,
    paddingLeft: 60,
  },
});
