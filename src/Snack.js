import React from 'react';
import { Link } from 'react-router-dom';

function Snack({ item }) {
    return (
        <div className="snack d-flex flex-column align-items-center justify-content-center p-4">
            <h3>{item.title}</h3>
            <div>
                <h5 className="d-inline-block me-2">
                    <span className="badge bg-primary">
                        Price: {item.price}
                    </span>
                </h5>
                <h5 className="d-inline-block">
                    <span
                        className={`badge ${
                            item.stock > 0 ? 'bg-success' : 'bg-danger'
                        }`}
                    >
                        {item.stock > 0
                            ? `${item.stock} in Stock`
                            : 'Out of Stock'}
                    </span>
                </h5>
            </div>
            <img alt={item.name} src={item.image} className="img-fluid" />
            <Link className="btn btn-primary mt-3" to="/">
                Back to Vending Machine
            </Link>
        </div>
    );
}

export default Snack;
