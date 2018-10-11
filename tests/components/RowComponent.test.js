import { shallow } from 'enzyme';
import React from 'react';
import RowComponent from '../../src/components/RowComponent';
import mockData from '../config/mockData';
const { userProps } = mockData;
const { requests, showDetailsModal } = userProps;

describe('Testing the RowComponent Component', () => {
    it('should render without an error', () => {
        shallow(
            <RowComponent
                props={userProps}
                requests={requests}
                showDetailsModal={showDetailsModal}
            />);
    });
});