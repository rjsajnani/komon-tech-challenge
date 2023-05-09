import { Stack } from 'expo-router';
import { Box, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const ManageSocialMedia = () => {
  return (
    <Box style={styles.container}>
      <Stack.Screen options={{ title: 'Manage Social Media' }} />
      <Text fontSize={'2xl'}>View various creators info</Text>
      <Text fontSize={'xl'}>Coming soon</Text>
    </Box>
  );
};

export default ManageSocialMedia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
