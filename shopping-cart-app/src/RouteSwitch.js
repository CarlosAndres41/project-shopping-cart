import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

import { MyContextProvider } from './components/NavContext';

import Home from './Home';
import Shop from './Shop';
import NewDeals from './components/NewDeals';
import Register from './components/Register';
import Checkout from './components/Checkout';
import Brand from './components/Brand';

const RouteSwitch = () => {
    return (
        <MyContextProvider>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/deals' element={<NewDeals />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/brand' element={<Brand />} />
                </Routes>
            </HashRouter>
        </MyContextProvider>
    );
};

export default RouteSwitch;
