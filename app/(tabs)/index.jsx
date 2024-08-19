import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NavButton } from '@/components/navigation/Button';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ dark: '#1A1C1F', light: '#181a1c' }}
      headerImage={<Image source={require('@/assets/images/IMG_2015.jpg')} style={styles.reactLogo} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>Chewabl</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <NavButton color='#737373'>Login</NavButton>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <NavButton navigateTo='Swipe' color='#737373'>
          Sign Up Here
        </NavButton>
      </ThemedView>
    </ParallaxScrollView>
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
    position: 'absolute',
    top: '20%',
    left: '15%',
  },
});
