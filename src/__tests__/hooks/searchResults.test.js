import React from 'react';
import searchResults from '../../hooks/searchResults';

import renderer from 'react-test-renderer';

it('will check the matchers and pass', () => {
    const tree = renderer.create(<searchResults />).toJSON();
    expect(tree).toMatchSnapshot({
        
    })
    // const [searchApi, results, errorMessage] = searchResults();
    
  });
  