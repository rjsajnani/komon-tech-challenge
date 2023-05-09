import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Box, Button, Text } from 'native-base';

const SocialMediaHandler = () => {
  const router = useRouter();
  const { socialMedia } = useSearchParams();

  return (
    <Box>
      <Stack.Screen
        options={{
          title: socialMedia,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#ffff',
        }}
      />
      <Text>Social {socialMedia}</Text>
    </Box>
  );
};

export default SocialMediaHandler;
