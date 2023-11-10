import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ItemCard from '../ItemCard';
import { faChocolateBar } from '@fortawesome/free-solid-svg-icons';

describe('ItemCard', () => {
    it('renders a link with item details if the item is in stock', () => {
        const itemInStock = {
            name: 'Chocolate Bar',
            price: '1.99',
            stock: 10,
            path: '/chocolate-bar',
            icon: faChocolateBar,
        };

        render(
            <Router>
                <ItemCard item={itemInStock} />
            </Router>
        );

        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveTextContent(itemInStock.name);
        expect(linkElement).toHaveTextContent(itemInStock.price);
        expect(
            screen.getByText(`${itemInStock.stock} in Stock`)
        ).toBeInTheDocument();
    });

    it('renders a disabled button with item details if the item is out of stock', () => {
        const itemOutOfStock = {
            name: 'Chocolate Bar',
            price: '1.99',
            stock: 0,
            path: '/chocolate-bar',
            icon: faChocolateBar,
        };

        render(
            <Router>
                <ItemCard item={itemOutOfStock} />
            </Router>
        );

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveTextContent(itemOutOfStock.name);
        expect(buttonElement).toHaveTextContent(itemOutOfStock.price);
        expect(screen.getByText('Out of Stock')).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();
    });

    // You can add more tests here to cover other scenarios
});
