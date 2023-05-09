import { Stack } from 'expo-router';

export default () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffff',
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
  );
};
