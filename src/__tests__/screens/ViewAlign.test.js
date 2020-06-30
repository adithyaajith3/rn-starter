import React from 'react';
import ViewAlign from '../../screens/ViewAlign';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ViewAlign />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  