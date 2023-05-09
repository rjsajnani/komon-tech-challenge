import { Stack } from 'expo-router';
import { Box } from 'native-base';
import { StyleSheet } from 'react-native';
import { ListView } from '../components';
import { socialMediaList } from '../data';

// Manages a list of social media currently used by the creator

const ManageSocialMedia = () => {
  return (
    <Box style={styles.container}>
      <Stack.Screen options={{ title: 'Manage Social Media' }} />
      {socialMediaList.map((item, index) => {
        return <ListView key={index} item={item} />;
      })}
    </Box>
  );
};

export default ManageSocialMedia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
