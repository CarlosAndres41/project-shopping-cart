import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MyContextProvider } from './components/NavContext';

import Home from './Home';
import Shop from './Shop';

const RouteSwitch = () => {
    return (
        <MyContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                </Routes>
            </BrowserRouter>
        </MyContextProvider>
    );
};

export default RouteSwitch;
