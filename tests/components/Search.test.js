import { shallow } from 'enzyme';
import React from 'react';
import Search from '../../src/components/Search';
import mockData from '../config/mockData';
const { userProps } = mockData;

describe('Testing the Search Component', () => {
    it('should render without an error', () => {
        shallow(
            <Search
                props={userProps}
            />);
    });
});