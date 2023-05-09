import { Stack, useSearchParams } from 'expo-router';
import { Box, Text } from 'native-base';

const SocialMediaHandler = () => {
  const { socialMedia } = useSearchParams();

  return (
    <Box>
      <Stack.Screen
        options={{
          title: socialMedia.toString(),
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
