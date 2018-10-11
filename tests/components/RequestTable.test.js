import { shallow } from 'enzyme';
import React from 'react';
import RequestTable from '../../src/components/RequestTable';
import mockData from '../config/mockData';
const { userProps } = mockData;
const { UserRequestTableColumns, requests,
    showDetailsModal } = userProps;

describe('Testing the RequestTable Component', () => {
    it('should render without an error', () => {
        shallow(
            <RequestTable
                props={userProps}
                UserRequestTableColumns={UserRequestTableColumns}
                requests={requests}
                showDetailsModal={showDetailsModal}
            />);
    });
});