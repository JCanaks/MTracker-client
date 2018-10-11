import { shallow } from 'enzyme';
import React from 'react';
import RequestView from '../../src/components/RequestView';
import mockData from '../config/mockData';
const { userProps } = mockData;

describe('Testing the RequestView Component', () => {
    it('should render without an error', () => {
        shallow(
            <RequestView
                props={userProps}
            />);
    });
});