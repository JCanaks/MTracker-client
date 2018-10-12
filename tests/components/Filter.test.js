import { shallow } from 'enzyme';
import React from 'react';
import Filter from '../../src/components/Filter';

describe('Testing the Footer Component', () => {
  it('should render without an error', () => {
    shallow(
    <Filter/>);
  });
});