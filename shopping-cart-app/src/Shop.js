import './App.css';

import Navbar from './components/Navbar';
import Deals from './components/Deals';
import Footer from './components/Footer';

function Shop() {
    return (
        <div className='shop'>
            <Navbar />
            <Deals />
            <Footer />
        </div>
    );
}

export default Shop;
