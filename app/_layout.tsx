import { Stack } from 'expo-router';
import { NativeBaseProvider, StatusBar, extendTheme } from 'native-base';

const theme = extendTheme({
  fonts: {
    heading: 'EuclidTriangle-Bold',
    body: 'EuclidTriangle',
    mono: 'EuclidTriangle',
  },
});

export default () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffff',
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
      </Stack>
    </NativeBaseProvider>
  );
};
