import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { items } from '../items';
import NavBar from '../NavBar';

test('renders navigation links', () => {
    render(
        <Router>
            <NavBar items={items} />
        </Router>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Cola')).toBeInTheDocument();
    expect(screen.getByText('Chips')).toBeInTheDocument();
    expect(screen.getByText('Candy')).toBeInTheDocument();
});
