import React from 'react';
import { shallow } from 'enzyme';

import Main from '../Main';

jest.mock('../Filters', () => 'Filters');
jest.mock('../Table', () => 'Table');

describe('Component: <Main />', () => {
  let wrapper, title, filters, table;

  beforeAll(() => {
    wrapper = shallow(<Main />);
    title = wrapper.find('h2');
    filters = wrapper.find('Filters');
    table = wrapper.find('Table');
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should render correctly', () =>
    expect(wrapper).toMatchSnapshot());

  it('should render the title', () =>
    expect(title.text()).toEqual('Football Player Finder'));

  it('should render the Filters component', () => 
    expect(filters).not.toBeNull());

  it('should render the Table component', () => 
    expect(table).not.toBeNull());
});
