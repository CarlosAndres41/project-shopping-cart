const CartItem = (props) => {
    return (
        <div className='item-card'>
            <img
                src={props.product.image}
                alt='product'
                className='item-image'
            ></img>
            <p className='item-title'>{props.product.title}</p>
            <p className='item-price'>${props.product.price}</p>
        </div>
    );
};

export default CartItem;
