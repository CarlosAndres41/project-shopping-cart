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

    // const removeFromCart = (product) => {
    //     const newCartProducts = cartProducts.filter(
    //         (cartProduct) => cartProduct !== product
    //     );
    //     setCartProducts(newCartProducts);
    //     setCartTotal(cartTotal - product.price);
    //     setCartQuantity(cartQuantity - 1);
    // };

    // Refactor removeFromCart to use index of product to remove from cart
    // And delete only the first instance when multiple instances of the same product are in the cart

    const removeFromCart = (product) => {
        const index = cartProducts.indexOf(product);
        if (index !== -1) {
            const newCartProducts = [...cartProducts];
            newCartProducts.splice(index, 1);
            setCartProducts(newCartProducts);
            setCartTotal(cartTotal - product.price);
            setCartQuantity(cartQuantity - 1);
        }
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
