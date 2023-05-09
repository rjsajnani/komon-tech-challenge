import { Stack, useSearchParams } from 'expo-router';
import { Box, Center, FlatList, Spinner } from 'native-base';
import { useEffect, useState } from 'react';
import { ResponseData, getUserInfo } from '../api/getUserInfo';
import { ListView } from '../components';

// This screen loads all the user info and displays it to the creator

const SocialMediaHandler = () => {
  const { socialMedia } = useSearchParams();
  const [data, setData] = useState<ResponseData[]>([]);

  async function fetchData() {
    const res = await getUserInfo(socialMedia);
    setData(res);
  }

  useEffect(() => {
    fetchData();

    return () => {
      setData([]);
    };
  }, []);

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

      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <ListView
                item={{ ...item, link: '/screen/userInfo', enabled: true }}
                key={item.id}
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Box p={'3/6'}>
          <Spinner size="lg" color="black" />
        </Box>
      )}
    </Box>
  );
};

export default SocialMediaHandler;
