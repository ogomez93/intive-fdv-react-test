import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

describe('Loader', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<Loader />);
  });
  
  it('should render', () => {
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a text shows that players are being fetched', () => {
    expect(wrapper.text()).toEqual('Fetching players, please wait...');
  });

  it('should render a loader', () => {
		expect(wrapper.find('.loader')).toHaveLength(1);
	});
});
