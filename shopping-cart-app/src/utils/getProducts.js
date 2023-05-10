const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10');
    const data = await response.json();
    return data;
};

export default fetchProducts;
