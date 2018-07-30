import React from 'react';
import renderer from 'react-test-renderer';

import Player, { calculateAge } from './Player';
import { presentYear, eightteenYearsAgo, player } from './test/constants';

describe('Component: <Player />', () => {
  const component = renderer.create( <Player player={player} /> );
  const playerProps = component.toJSON().children;
  
  test('renders the component', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('component renders player name correctly', () => {
    const nameTd = playerProps.find(p => p.props.name === 'name');
    expect(nameTd.children[0]).toEqual('test name');
  });

  test('component renders player position correctly', () => {
    const positionTd = playerProps.find(p => p.props.name === 'position');
    expect(positionTd.children[0]).toEqual('test position');
  });

  test('component renders player nationality correctly', () => {
    const nationalityTd = playerProps.find(p => p.props.name === 'nationality');
    expect(nationalityTd.children[0]).toEqual('test nationality');
  });

  test('component renders player age correctly', () => {
    const ageTd = playerProps.find(p => p.props.name === 'age');
    expect(ageTd.children[0]).toEqual('18');
  });
});

describe('Function: calculateAge(dateOfBirth)', () => {
  test('someone born this year is 0 years old', () => {
    expect(calculateAge(`${presentYear}-01-01`)).toEqual(0);
  });

  test('someone born 18 years ago is 18 years old', () => {
    expect(calculateAge(`${eightteenYearsAgo}-01-01`)).toEqual(18);
  });
});
