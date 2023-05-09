import { Box, HStack, Spacer, Text, VStack, useToast } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

type Props = {
  item: {
    name: string;
    link: string;
    enabled: boolean;
    icon?: any;
    tooltip?: string;
  };
};

export const ListView = ({
  item: { name, link, icon, tooltip, enabled },
}: Props) => {
  const toast = useToast();
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
      style={{ marginVertical: 20 }}
    >
      <Link
        href={link}
        onPress={!enabled ? () => toast.show({ description: tooltip }) : null}
      >
        <HStack space={[2, 3]} justifyContent="space-between">
          <FontAwesome5 name={icon} size={24} color="black" />
          <VStack>
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
          </VStack>
          <Spacer />
        </HStack>
      </Link>
    </Box>
  );
};
