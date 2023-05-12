import React, { useState, createContext } from 'react';

export const MyContext = createContext();

export function MyContextProvider(props) {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);

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

    return (
        <MyContext.Provider
            value={{
                cartProducts,
                cartTotal,
                cartQuantity,
                setCartProducts,
                setCartTotal,
                setCartQuantity,
                removeFromCart,
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}
