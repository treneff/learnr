import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
    it('renders the logo, sidemenu button, and account menu', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        expect(screen.getByTestId('header-item-1')).toBeInTheDocument();
        expect(screen.getByTestId('header-item-2')).toBeInTheDocument();// find the logo by its text
        expect(screen.getByTestId('header-item-3')).toBeInTheDocument();// find the logo by its text

    });
});
