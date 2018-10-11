import { shallow } from 'enzyme';
import React from 'react';
import Home from '../../src/views/Home';

describe('Testing the Home Component', () => {
    it('should render without an error', () => {
        shallow(
            <Home/>);
    });
});