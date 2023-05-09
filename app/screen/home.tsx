import { Box, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { ListView } from '../components';
import { adminList } from '../data';

//Mainly used to handle admin tasks which would be useful to the user

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
