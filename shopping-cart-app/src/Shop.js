import './App.css';

import Navbar from './components/Navbar';
import Deals from './components/Deals';
import Products from './components/Products';
import Footer from './components/Footer';

function Shop() {
    return (
        <div className='shop'>
            <Navbar />
            <Deals />
            <Products />
            <Footer />
        </div>
    );
}

export default Shop;
