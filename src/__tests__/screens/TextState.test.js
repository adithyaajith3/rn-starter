import React from 'react';
import renderer from 'react-test-renderer';

import TextState from '../../screens/TextState';

test('renders correctly', () => {
  const tree = renderer.create(<TextState />).toJSON();
  expect(tree).toMatchSnapshot();
});