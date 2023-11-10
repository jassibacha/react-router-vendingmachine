import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import VendingMachine from '../VendingMachine';
import { items } from '../items';

test('renders items', () => {
    render(
        <Router>
            <VendingMachine items={items} />
        </Router>
    );
    expect(
        screen.getByText('Items Available For Purchase:')
    ).toBeInTheDocument();
    items.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
    });
});
