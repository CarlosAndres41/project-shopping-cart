import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className='empty-cart'>
            <h3>Your cart is empty</h3>
            <p>Add some items to your cart</p>
            <Link to='/shop' className='continue-shopping-btn'>
                Go Shopping
            </Link>
        </div>
    );
};

export default EmptyCart;
