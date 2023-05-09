import { CommonListType } from '../types';

export const adminList: CommonListType[] = [
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
