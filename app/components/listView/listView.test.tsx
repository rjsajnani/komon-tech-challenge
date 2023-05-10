import React from 'react';

import { renderWithProviders, RenderAPI } from '../../utils/testing-library';
import { ListView } from './listView';

const mockItem = {
  name: 'Test',
  link: '/',
  enabled: true,
  icon: 'edit',
};

describe('<ListView />', () => {
  let tree: RenderAPI;

  beforeEach(function () {
    tree = renderWithProviders(<ListView item={mockItem} />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
