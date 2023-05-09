import axios from 'axios';

const API_BASE = 'https://api.npoint.io/370fc4db2db84ad88075';

export interface LatestPost {
  postId: number;
  postImage: string;
  type: 'img' | 'video';
}

export interface ResponseData {
  avatar_url: string;
  bio: string;
  followers: string;
  id: number;
  name: string;
  lastestPost: LatestPost[];
}

export const getUserInfo = async (
  platformName = 'instagram',
): Promise<ResponseData[]> => {
  const data = await axios
    .get(API_BASE + `/${platformName.toLowerCase()}`)
    .then((res) => {
      return res.data;
    });

  return data;
};
