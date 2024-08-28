import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import RestaurantList from '@/components/restaurants/RestaurantList';

export default function SwipeScreen() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const res = await fetch('http://localhost:3000/api/restaurants/');
        const data = await res.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size='small' color='#0000ff' />}
      <RestaurantList restaurants={restaurants} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 60,
  },
});
