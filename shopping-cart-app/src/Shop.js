import './App.css';

import Navbar from './components/Navbar';
import Deals from './components/Deals';
import Products from './components/Products';
import Footer from './components/Footer';
import { useState } from 'react';

function Shop() {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);

    const addToCart = (product) => {
        const newCartProducts = [...cartProducts, product];
        setCartProducts(newCartProducts);
        setCartTotal(cartTotal + product.price);
        setCartQuantity(cartQuantity + 1);
    };

    return (
        <div className='shop'>
            <Navbar />
            <Deals />
            <Products
                addToCart={addToCart}
                cartQuantity={cartQuantity}
                cartProducts={cartProducts}
                cartTotal={cartTotal}
            />
            <Footer />
        </div>
    );
}

export default Shop;
