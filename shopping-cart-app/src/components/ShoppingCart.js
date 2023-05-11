import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import EmptyCart from './EmptyCart';

const ShoppingCart = (props) => {
    let quantity = props.cart.cartQuantity;
    let total = props.cart.cartTotal;
    let products = props.cart.cartProducts;

    return (
        <div className={props.visible ? 'cart show' : 'cart'}>
            <div className='cart-head'>
                <h1>Your Cart</h1>
                <Icon
                    className='close-cart-btn'
                    path={mdiClose}
                    size={1}
                    onClick={props.handleCartVisibility}
                />
            </div>
            <div className='cart-body'>
                {quantity === 0 ? (
                    <EmptyCart />
                ) : (
                    <h2>You have {quantity} products in your cart</h2>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
