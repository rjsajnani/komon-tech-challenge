import {
  Avatar,
  Box,
  HStack,
  Spacer,
  Text,
  VStack,
  useToast,
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { ListViewProps as Props } from './listView.props';
import { AppContext } from '../../context';

export const ListView: React.FC<Props> = ({ item }) => {
  const { name, link, icon, tooltip, enabled, avatar_url, bio, followers } =
    item;
  const toast = useToast();
  const navigation = useRouter();
  const { data, updateData } = useContext(AppContext);

  const handleOnPress = () => {
    if (enabled) {
      updateData(item);
      navigation.push({
        pathname: link,
      });
    } else {
      toast.show({ description: tooltip });
    }
  };

  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: 'muted.50',
      }}
      borderColor="muted.800"
      pl={['0', '4']}
      pr={['0', '5']}
      py="2.5"
      my="3"
    >
      <TouchableOpacity onPress={handleOnPress}>
        <HStack space={[2, 3]} justifyContent="space-between">
          {icon !== undefined ? (
            <FontAwesome5 name={icon} size={24} color="black" />
          ) : (
            <Avatar
              size="48px"
              source={{
                uri: avatar_url,
              }}
            />
          )}
          <VStack px={'2'}>
            <HStack>
              <Text
                fontFamily={'mono'}
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                bold
              >
                {name}
              </Text>
            </HStack>
            {bio && (
              <Text
                width="4/5"
                noOfLines={2}
                lineBreakMode="middle"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                {bio}
              </Text>
            )}
          </VStack>
          <Spacer />
        </HStack>
      </TouchableOpacity>
    </Box>
  );
};
