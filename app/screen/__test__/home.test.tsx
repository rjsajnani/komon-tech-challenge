import React from 'react';

import Home from '../home';
import {
  renderWithProviders,
  RenderAPI,
  fireEvent,
} from '../../utils/testing-library';

describe('<Home />', () => {
  let tree: RenderAPI;

  beforeEach(function () {
    tree = renderWithProviders(<Home />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  // this test was to check navigation (wasn't able to mock expo-router)

  // it('open the first link', async () => {
  //   fireEvent(await tree.findByText('Manage Social Media'), 'press');
  //   expect(navigation.screen).toBe([socialMedia])
  // });
});
