import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// ToDo: refactor

it('renders without crashing', () => {
  shallow(<App />);
});
