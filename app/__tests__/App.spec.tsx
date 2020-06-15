// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Navigation
import Navigation from '@app/navigation';

// Under test
import { App } from '../App';

// Mocks
jest.mock('@app/navigation', () => jest.fn());

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
    expect(component.find(Navigation)).toBeTruthy();
  });
});
