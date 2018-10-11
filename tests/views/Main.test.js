import { shallow } from 'enzyme';
import React from 'react';
import Main from '../../src/views/Main';

describe('Testing the Home Component', () => {
    it('should render without an error', () => {
        shallow(
            <Main/>);
    });
});