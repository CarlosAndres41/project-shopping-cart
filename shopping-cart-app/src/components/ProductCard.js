// Create a react component that displays a product in the shop
// It will show title, description, price, category and image

const ProductCard = (props) => {
    const { title, price, description, category, image, rating } =
        props.product;
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={image} alt={title} />
            </div>
            <div className='product-info'>
                <div className='title-price'>
                    <h5>{title}</h5>
                    <h3>${price}</h3>
                </div>
                <button
                    className='add-to-cart-btn'
                    onClick={() => props.addToCart(props.product)}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
