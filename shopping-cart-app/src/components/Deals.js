import deals from '../imgs/deals.png';
import { Link } from 'react-router-dom';

const Deals = () => {
    return (
        <div className='deals'>
            <div className='deals-banner'>
                <div className='deals-left'>
                    <h2>Grab Up To 50% Off On Selected Products</h2>
                    <Link to='/deals' className='deals-btn'>
                        Shop Now
                    </Link>
                </div>
                <div className='deals-right'>
                    <img src={deals} alt='deals'></img>
                </div>
            </div>
        </div>
    );
};

export default Deals;
