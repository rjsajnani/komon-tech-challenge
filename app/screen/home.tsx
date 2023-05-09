import { Box, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { ListView } from '../components/listView';

type AdminList = {
  name: string;
  link: string;
  enabled: boolean;
  tooltip?: string;
  icon?: any;
};

const adminList: AdminList[] = [
  {
    name: 'Manage Social Media',
    link: '/screen/manageSocialMedia',
    enabled: true,
    icon: 'setting',
  },
  {
    name: 'Community Messages',
    link: '/',
    enabled: true,
    tooltip: 'Coming Soon',
    icon: 'message1',
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
