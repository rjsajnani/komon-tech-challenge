import { LatestPost } from '../../api/getUserInfo';

export interface ListViewProps {
  item: {
    name?: string;
    link?: string;
    enabled?: boolean;
    icon?: any;
    tooltip?: string;
    bio?: string;
    followers?: string;
    lastestPost?: LatestPost[];
    avatar_url?: string;
  };
}
