import './App.css';

import Navbar from './components/Navbar';
import Deals from './components/Deals';
import Products from './components/Products';
import Footer from './components/Footer';

import { MyContext } from './components/NavContext';

import { useState, useContext } from 'react';

function Shop() {
    // const [cartProducts, setCartProducts] = useState([]);
    // const [cartTotal, setCartTotal] = useState(0);
    // const [cartQuantity, setCartQuantity] = useState(0);

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

    // const removeFromCart = (product) => {
    //     const index = cartProducts.indexOf(product);
    //     if (index !== -1) {
    //         const newCartProducts = [...cartProducts];
    //         newCartProducts.splice(index, 1);
    //         setCartProducts(newCartProducts);
    //         setCartTotal(cartTotal - product.price);
    //         setCartQuantity(cartQuantity - 1);
    //     }
    // };

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
