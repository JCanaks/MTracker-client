import { shallow } from 'enzyme';
import React from 'react';
import InputComponent from '../../src/components/InputComponent';
import mockData from '../config/mockData';
const { props } = mockData;

describe('Testing the HomeView  Component', () => {
    it('should render without an error', () => {
        shallow(
            <InputComponent
                props={props}
            />);
    });
});