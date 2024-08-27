import { View } from 'react-native';
import Restaurant from '@/components/Restaurant';

export default function RestaurantList({ restaurants }) {
  return (
    <View>
      {restaurants.map((restaurant, index) => (
        <Restaurant restaurant={restaurant} key={index} index={index} />
      ))}
    </View>
  );
}
