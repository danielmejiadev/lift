// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Screens
import { App } from '../App';

/**
 * @file App.spec.tsx
 * @author Daniel Mejia
 * @description Test file for App screen.
 */
describe('Root App', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<App />);
  });

  afterEach(() => jest.restoreAllMocks());

  it('render correctly', async () => {
    expect(component).toMatchSnapshot();
  });
});
