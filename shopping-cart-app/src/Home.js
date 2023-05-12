import './App.css';

import React, { useContext } from 'react';
import { MyContext } from './components/NavContext';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Services from './components/Services';
import Footer from './components/Footer';

function Home() {
    const {
        cartProducts,
        cartTotal,
        cartQuantity,
        setCartProducts,
        setCartTotal,
        setCartQuantity,
        removeFromCart,
    } = useContext(MyContext);

    return (
        <div className='home'>
            <Navbar
                cartProducts={cartProducts}
                cartTotal={cartTotal}
                cartQuantity={cartQuantity}
                removeFromCart={removeFromCart}
            />
            <MainContent />
            <Services />
            <Footer />
        </div>
    );
}

export default Home;
