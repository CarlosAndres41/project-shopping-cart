import deals from '../imgs/deals.png';

const Deals = () => {
    return (
        <div className='deals'>
            <div className='deals-banner'>
                <div className='deals-left'>
                    <h2>Grab Up To 50% Off On Selected Products</h2>
                    <a href='/deals' className='deals-btn'>
                        Shop Now
                    </a>
                </div>
                <div className='deals-right'>
                    <img src={deals} alt='deals'></img>
                </div>
            </div>
        </div>
    );
};

export default Deals;
