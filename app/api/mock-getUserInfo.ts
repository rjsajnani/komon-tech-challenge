import { ResponseData } from './getUserInfo';

export const mokcGetUserInfo = async (
  platformName = 'instagram',
): Promise<ResponseData[]> => {
  return Promise.resolve([
    {
      avatar_url: 'dummyUrl',
      bio: 'Bio from the creator',
      followers: '124',
      id: 1,
      name: 'Testing',
      lastestPost: [],
    },
  ]);
};
