import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const ShoppingCart = (props) => {
    return (
        <div className={props.visible ? 'cart show' : 'cart'}>
            <div className='cart-head'>
                <h1>Your Cart</h1>
                <Icon
                    className='close-login-btn'
                    path={mdiClose}
                    size={1}
                    onClick={props.handleFormVisibility}
                />
            </div>
        </div>
    );
};

export default ShoppingCart;
