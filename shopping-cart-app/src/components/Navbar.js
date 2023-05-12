import Form from './LogIn';
import ShoppingCart from './ShoppingCart';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const handleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <ul>
                    <li>
                        <svg
                            strokeWidth='80px'
                            height='80px'
                            viewBox='0 0 64 64'
                            id='icons'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <defs></defs>
                            <title />
                            <path
                                className='cls-1'
                                d='M32,22A10,10,0,1,0,42,32,10,10,0,0,0,32,22Zm0,16a6,6,0,1,1,6-6A6,6,0,0,1,32,38Z'
                            />
                            <path
                                className='cls-1'
                                d='M57.85,28,47.78,11.65A7.69,7.69,0,0,0,41.22,8H22.78a7.69,7.69,0,0,0-6.56,3.65L6.15,28a7.68,7.68,0,0,0,0,8.1l10.07,16.3A7.69,7.69,0,0,0,22.78,56H41.22a7.69,7.69,0,0,0,6.56-3.65l10.07-16.3A7.68,7.68,0,0,0,57.85,28Zm-3.4,6L44.37,50.24A3.67,3.67,0,0,1,41.22,52H22.78a3.67,3.67,0,0,1-3.15-1.76L9.55,34a3.7,3.7,0,0,1,0-3.9L19.63,13.76A3.67,3.67,0,0,1,22.78,12H41.22a3.67,3.67,0,0,1,3.15,1.76L54.45,30.05A3.7,3.7,0,0,1,54.45,34Z'
                            />
                        </svg>
                    </li>
                    <li>
                        <Link to='/'>
                            <h1>eCommerce</h1>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='right-items'>
                <div className='links'>
                    <ul>
                        <li>
                            {/* <a href='/'>Home</a> */}
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            {/* <a href='/shop'>Shop</a> */}
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li>
                            {/* <a href='/brand'>Brand</a> */}
                            <Link to='/brand'>Brand</Link>
                        </li>
                    </ul>
                </div>
                <div className='login'>
                    <ul>
                        <li
                            className='login-btn'
                            onClick={handleFormVisibility}
                        >
                            <svg
                                className='svg-icon-sm'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
                                    stroke='#323232'
                                    strokeWidth='2'
                                />
                                <path
                                    d='M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z'
                                    stroke='#323232'
                                    strokeWidth='2'
                                />
                                <path
                                    d='M6.16406 18.5C6.90074 16.5912 8.56373 16 12.0001 16C15.4661 16 17.128 16.5578 17.855 18.5'
                                    stroke='#323232'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                />
                            </svg>
                        </li>
                        <li className='cart-btn' onClick={handleCartVisibility}>
                            <svg
                                className={
                                    props.cartQuantity === 0
                                        ? 'svg-icon-sm'
                                        : 'svg-icon-sm cart-full '
                                }
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g id='Interface / Shopping_Cart_02'>
                                    <path
                                        id='Vector'
                                        d='M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z'
                                        stroke='#000000'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </g>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <Form
                visible={isFormVisible}
                handleFormVisibility={handleFormVisibility}
            />
            <ShoppingCart
                visible={isCartVisible}
                handleCartVisibility={handleCartVisibility}
                cart={props}
            />
        </div>
    );
};

export default Navbar;
