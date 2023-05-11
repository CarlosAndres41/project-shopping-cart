const EmptyCart = () => {
    return (
        <div className='empty-cart'>
            <h3>Your cart is empty</h3>
            <p>Add some items to your cart</p>
            <a href='/shop' className='continue-shopping-btn'>
                Go Shopping
            </a>
        </div>
    );
};

export default EmptyCart;
