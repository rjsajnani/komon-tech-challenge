import { Stack } from 'expo-router';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { AppProvider } from './context';

const theme = extendTheme({
  fonts: {
    heading: 'EuclidTriangle-Bold',
    body: 'EuclidTriangle',
    mono: 'EuclidTriangle',
  },
});

export default () => {
  return (
    <AppProvider>
      <NativeBaseProvider theme={theme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ffff',
            },
          }}
        >
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen
            name="screen/userInfo"
            options={{ presentation: 'modal' }}
          />
        </Stack>
      </NativeBaseProvider>
    </AppProvider>
  );
};
