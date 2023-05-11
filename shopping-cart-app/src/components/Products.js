import products from '../utils/getProducts';
import ProductCard from './ProductCard';

const Products = (props) => {
    return (
        <div className='products'>
            <h2>Recommended For You</h2>
            <div className='shop-items'>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={props.addToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
