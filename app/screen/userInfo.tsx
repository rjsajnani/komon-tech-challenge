import { Stack, useRouter } from 'expo-router';
import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from 'native-base';
import { useContext } from 'react';
import { MediaFlatList } from '../components/mediaFlaltList/mediaFlastList';
import { AppContext } from '../context';
import { AntDesign } from '@expo/vector-icons';

const UserInfo = () => {
  const { data } = useContext(AppContext);

  const navigation = useRouter();

  return (
    <Box p={2.5}>
      <Stack.Screen
        options={{
          title: data.name,
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.back()}
              colorScheme="black"
              key="outline"
              variant={'outline'}
              _icon={{
                as: AntDesign,
                name: 'close',
              }}
            />
          ),
        }}
      />
      <HStack>
        <Image
          size="xl"
          alt="/"
          borderRadius={100}
          source={{
            uri: data.avatar_url,
          }}
        />
        <VStack px={2}>
          <Text fontSize={'lg'} px={'2'}>
            Name: {data.name}
          </Text>
          <Text fontSize={'lg'} px={'2'}>
            Follwers: {data.followers}
          </Text>
          <Text width={'2/4'} noOfLines={3} fontSize={'md'} px={'2'}>
            Bio: {data.bio}
          </Text>
        </VStack>
      </HStack>
      <Text py={2} fontSize={'2xl'}>
        Latest Posts
      </Text>
      <MediaFlatList lastestPost={data.lastestPost} />
    </Box>
  );
};

export default UserInfo;
