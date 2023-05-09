import { NativeBaseProvider, Text, extendTheme } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { SplashScreen } from 'expo-router';

const theme = extendTheme({
  fonts: {
    heading: 'EuclidTriangle-Bold',
    body: 'EuclidTriangle',
    mono: 'EuclidTriangle',
  },
});

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
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text fontSize={'2xl'} fontWeight={'bold'} fontFamily={'heading'}>
            Komon Creator Dashboard
          </Text>
          <Text fontSize={'xl'} color={'#38434D'} fontFamily={'body'}>
            Manage your community
          </Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
});
