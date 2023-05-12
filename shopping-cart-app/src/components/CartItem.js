const CartItem = (props) => {
    return (
        <div className='item-card'>
            <img
                src={props.product.image}
                alt='product'
                className='item-image'
            ></img>
            <p>{props.product.title}</p>
            <p>${props.product.price}</p>
        </div>
    );
};

export default CartItem;
