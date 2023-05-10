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
                    <h4>{title}</h4>
                    <h3>${price}</h3>
                </div>
                <h6>{category}</h6>
            </div>
        </div>
    );
};

export default ProductCard;
