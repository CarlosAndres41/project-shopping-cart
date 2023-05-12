import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

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
                    <div className='cart-items'>
                        <h2>You have {quantity} products in your cart</h2>
                        {products.map((product) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                removeFromCart={props.cart.removeFromCart}
                            />
                        ))}
                        <div className='cart-total'>
                            <h3>Total: ${total}</h3>
                            <a href='/checkout'>
                                <button className='checkout-btn'>
                                    Proceed to Checkout
                                </button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
