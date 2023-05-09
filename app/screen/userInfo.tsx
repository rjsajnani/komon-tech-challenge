import { Stack, useSearchParams } from 'expo-router';
import { Box, Text } from 'native-base';

const UserInfo = () => {
  const { name } = useSearchParams();

  return (
    <Box>
      <Stack.Screen options={{ title: name }} />
      <Text>Social</Text>
    </Box>
  );
};

export default UserInfo;
