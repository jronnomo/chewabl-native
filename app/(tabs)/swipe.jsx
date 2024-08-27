import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import RestaurantList from '@/components/restaurants/RestaurantList';

export default function SwipeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      const res = await fetch('http://localhost:3000/api/restaurants/');
      const data = await res.json();
      setRestaurants(data);
    }

    fetchRestaurants();
  }, []);

  return (
    <View>
      <RestaurantList restaurants={restaurants} />
    </View>
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
