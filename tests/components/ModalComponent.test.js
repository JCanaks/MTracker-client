import { shallow } from 'enzyme';
import React from 'react';
import ModalComponent from '../../src/components/ModalComponent';
import mockData from '../config/mockData';
const { userProps } = mockData;

describe('Testing the HomeView  Component', () => {
    it('should render without an error', () => {
        shallow(
            <ModalComponent
                props={userProps}
            />);
    });
});