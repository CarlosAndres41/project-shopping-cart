import React from 'react';

// Create a react component that shows our services of free shipping, 24/7 support and 100% money back guarantee.

const Services = () => {
    return (
        <div className='services'>
            <div className='services-header'></div>
            <div className='services-icons'>
                <div className='shipping'>
                    <h3>Free Shipping</h3>
                </div>
                <div className='suppport'>
                    <h3>24/7 Support</h3>
                </div>
                <div className='moneyback'>
                    <h3>100% Money Back Guarantee</h3>
                </div>
            </div>
        </div>
    );
};

export default Services;
