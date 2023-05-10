import products from '../utils/getProducts';
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div className='products'>
            <h2>Recommended For You</h2>
            <div className='shop-items'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
