import { Stack } from 'expo-router';
import { Box, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { CommonListType } from '../types';
import { ListView } from '../components/listView';

const socialAccounts: CommonListType[] = [
  {
    name: 'Instagram',
    icon: 'instagram',
    link: '/screen/Instagram',
    enabled: true,
  },
  {
    name: 'TikTok',
    icon: 'tiktok',
    link: '/screen/Tiktok',
    enabled: true,
  },
  {
    name: 'Discord',
    icon: 'discord',
    link: '/screen/manageSocialMedia',
    tooltip: 'Coming Soon',
    enabled: false,
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: '/screen/manageSocialMedia',
    tooltip: 'Coming Soon',
    enabled: false,
  },
];

const ManageSocialMedia = () => {
  return (
    <Box style={styles.container}>
      <Stack.Screen options={{ title: 'Manage Social Media' }} />
      {socialAccounts.map((item, index) => {
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
