import React from 'react';
import renderer from 'react-test-renderer';

import CounterReductor from '../../screens/CounterReductor';

test('renders correctly', () => {
    const tree = renderer.create(<CounterReductor />).toJSON();
    expect(tree).toMatchSnapshot();
  });