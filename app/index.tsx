import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { SplashScreen } from 'expo-router';
import Home from './screen/home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'EuclidTriangle-Bold': require('./assets/fonts/EuclidTriangle-Bold.ttf'),
    EuclidTriangle: require('./assets/fonts/EuclidTriangle-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.main}>
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
});
