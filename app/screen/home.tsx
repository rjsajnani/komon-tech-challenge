import { Box, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { ListView } from '../components/listView';
import { CommonListType } from '../types';

const adminList: CommonListType[] = [
  {
    name: 'Manage Social Media',
    link: '/screen/manageSocialMedia',
    enabled: true,
    icon: 'edit',
  },
  {
    name: 'Community Messages',
    link: '/',
    enabled: false,
    tooltip: 'Coming Soon',
    icon: 'facebook-messenger',
  },
];

const Home = () => {
  return (
    <>
      <Text
        fontSize={'2xl'}
        fontWeight={'bold'}
        style={styles.title}
        fontFamily={'heading'}
      >
        Komon Creator Dashboard
      </Text>
      <Box style={styles.content}>
        {adminList.map((item, index) => {
          return <ListView key={index} item={item} />;
        })}
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  content: {
    marginVertical: 16,
  },
});

export default Home;
