import React from 'react';
import ItemCard from './ItemCard';
import './VendingMachine.css';

function VendingMachine({ items }) {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h3>Items Available For Purchase:</h3>
                <div className="row">
                    {items.map((item, index) => (
                        <ItemCard key={index} item={item} />
                    ))}
                </div>
            </div>

            <div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <img
                    src="https://i.imgur.com/3ZO4Xr7.jpeg"
                    alt="Vending Machine"
                    className="img-fluid"
                />
            </div>
        </div>
    );
}

export default VendingMachine;
