import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ItemCard({ item }) {
    return (
        <div className="col-12 col-md-6 mb-3">
            {item.stock > 0 ? (
                <Link
                    to={item.path}
                    className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center flex-wrap"
                >
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                    {item.name}
                    <span className="badge bg-secondary ms-2">
                        {item.price}
                    </span>
                    <div className="stock-info w-100 text-center mt-0">
                        <small>{item.stock} in Stock</small>
                    </div>
                </Link>
            ) : (
                <button
                    className="btn btn-lg w-100 d-flex align-items-center justify-content-center flex-wrap"
                    disabled
                >
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                    {item.name}
                    <span className="badge bg-secondary ms-2">
                        {item.price}
                    </span>
                    <div className="stock-info w-100 text-center mt-0">
                        <small>Out of Stock</small>
                    </div>
                </button>
            )}
        </div>
    );
}

export default ItemCard;
