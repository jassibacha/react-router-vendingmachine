import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders VendingMachine and has logo text link', () => {
    render(<App />);
    const linkElement = screen.getByText(/VendingMachine/i);
    expect(linkElement).toBeInTheDocument();
});
