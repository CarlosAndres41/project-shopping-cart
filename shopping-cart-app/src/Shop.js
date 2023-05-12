import './App.css';

import Navbar from './components/Navbar';
import Deals from './components/Deals';
import Products from './components/Products';
import Footer from './components/Footer';
import NavContext from './components/NavContext';
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

    const removeFromCart = (product) => {
        const newCartProducts = cartProducts.filter(
            (cartProduct) => cartProduct !== product
        );
        setCartProducts(newCartProducts);
        setCartTotal(cartTotal - product.price);
        setCartQuantity(cartQuantity - 1);
    };

    const NavProps = {
        cartQuantity: { cartQuantity },
        cartProducts: { cartProducts },
        cartTotal: { cartTotal },
    };

    return (
        <div className='shop'>
            {/* <NavContext.Provider value={NavProps}> */}
            <Navbar
                cartProducts={cartProducts}
                cartTotal={cartTotal}
                cartQuantity={cartQuantity}
                removeFromCart={removeFromCart}
            />
            {/* </NavContext.Provider> */}

            <Deals />
            <Products addToCart={addToCart} />
            <Footer />
        </div>
    );
}

export default Shop;
