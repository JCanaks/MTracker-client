import { shallow } from 'enzyme';
import React from 'react';
import RequestDetailsModal from '../../src/components/RequestDetailsModal';
import mockData from '../config/mockData';
const { userProps } = mockData;
const { request, updateData } =  userProps;

describe('Testing the RequestDetailsModal Component', () => {
    it('should render without an error', () => {
        shallow(
            <RequestDetailsModal
                props={userProps}
                request={request}
                updateData ={updateData}
            />);
    });
});