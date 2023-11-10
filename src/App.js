import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import { items } from './items';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const bodyClass = document.body.classList;
        darkMode
            ? bodyClass.add('bg-dark', 'text-white')
            : bodyClass.remove('bg-dark', 'text-white');
    }, [darkMode]);

    // Find the item based on the path
    const findItemByPath = (path) => items.find((item) => item.path === path);

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    items={items}
                />

                <div className="container p-5">
                    <Routes>
                        <Route
                            path="/"
                            element={<VendingMachine items={items} />}
                        />
                        {items.map((item) => (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<Snack item={item} />}
                            />
                        ))}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
