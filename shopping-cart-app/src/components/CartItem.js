const CartItem = (props) => {
    return (
        <div className='item-card'>
            <img
                src={props.product.image}
                alt='product'
                className='item-image'
            ></img>
            <div className='item-info'>
                <p className='item-title'>{props.product.title}</p>
                <p className='item-price'>${props.product.price}</p>
                <span className='remove-item'>Remove from cart</span>
            </div>
        </div>
    );
};

export default CartItem;
