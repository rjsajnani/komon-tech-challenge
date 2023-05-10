import React from 'react';
import { LatestPost } from '../../api/getUserInfo';

import { renderWithProviders, RenderAPI } from '../../utils/testing-library';
import { MediaFlatList } from './mediaFlastList';

const mockMediaImg: LatestPost[] = [
  {
    postId: 1,
    postImage: 'string',
    type: 'img',
  },
];
const mockMediaVideo: LatestPost[] = [
  {
    postId: 1,
    postImage: 'string',
    type: 'img',
  },
];

describe('<MediaFlatList />', () => {
  let tree: RenderAPI;

  const createInstance = (type: LatestPost[]) => {
    tree = renderWithProviders(<MediaFlatList lastestPost={type} />);
  };

  it('renders image  type correctly', () => {
    createInstance(mockMediaImg);
    expect(tree).toMatchSnapshot();
  });

  it('renders video type correctly', () => {
    createInstance(mockMediaVideo);
    expect(tree).toMatchSnapshot();
  });
});
