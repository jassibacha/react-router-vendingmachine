import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

function NavBar({ darkMode, setDarkMode, items }) {
    // Filter items that are in stock
    const inStockItems = items.filter((item) => item.stock > 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    VendingMachine
                </Link>

                <ul className="navbar-nav flex-row">
                    <li className="nav-item">
                        <Link className="nav-link p-2" to="/">
                            Home
                        </Link>
                    </li>
                    {inStockItems.map((item) => (
                        <li key={item.name} className="nav-item">
                            <Link className="nav-link p-2" to={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}
                >
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    {darkMode ? ' Light Mode' : ' Dark Mode'}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
