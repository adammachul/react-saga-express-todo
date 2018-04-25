import React from 'react';
import ReactDOM from 'react-dom';
import NavigationHead from './NavigationHead';

describe('NavigationHead', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavigationHead/>, div);
    });
});