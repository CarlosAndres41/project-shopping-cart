import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const ShoppingCart = (props) => {
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
        </div>
    );
};

export default ShoppingCart;
