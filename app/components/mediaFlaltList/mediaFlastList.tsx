import { Box, FlatList, Image } from 'native-base';
import { LatestPost } from '../../api/getUserInfo';
import { ResizeMode, Video } from 'expo-av';

import { MeidaFlatListProps as Props } from './mediaFlaltList.props';
import { StyleSheet } from 'react-native';

// This component is handling the media provided by various social media API

export const MediaFlatList: React.FC<Props> = (props) => {
  const { lastestPost } = props;
  return (
    <FlatList
      numColumns={lastestPost[0].type === 'img' ? 1 : 3}
      data={lastestPost}
      renderItem={({ item }) => {
        return (
          <Box
            m={2}
            maxW="100%"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
          >
            {item.type === 'img' ? (
              <Image
                size="2xl"
                py={2}
                px={2}
                width={'100%'}
                alt="/"
                source={{
                  uri: item.postImage,
                }}
              />
            ) : (
              <Video
                style={styles.video}
                source={{
                  uri: item.postImage,
                }}
                shouldPlay={true}
                useNativeControls
                resizeMode={ResizeMode.STRETCH}
                isLooping
              />
            )}
          </Box>
        );
      }}
      keyExtractor={(item) => item.postId.toString()}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: 120,
    height: 200,
  },
});
