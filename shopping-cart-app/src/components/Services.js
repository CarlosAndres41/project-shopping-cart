import React from 'react';

// Create a react component that shows our services of free shipping, 24/7 support and 100% money back guarantee.

const Services = () => {
    return (
        <div className='services'>
            <div className='services-header'>
                <h2>Millions of people use eCommerce</h2>
            </div>
            <div className='services-icons'>
                <div className='services-card'>
                    <svg
                        fill='#000000'
                        width='80px'
                        height='80px'
                        viewBox='0 0 24 24'
                        id='shipping'
                        data-name='Flat Line'
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon flat-line'
                    >
                        <path
                            id='secondary'
                            d='M16,6v9a2,2,0,0,0-2,2H10a2,2,0,0,0-4,0H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H15A1,1,0,0,1,16,6Z'
                            // style='fill: rgb(44, 169, 188); strokeWidth: 2;'
                        ></path>
                        <path
                            id='primary'
                            d='M16,15V6a1,1,0,0,0-1-1H4A1,1,0,0,0,3,6V16a1,1,0,0,0,1,1H6'
                            // style='fill: none; stroke: rgb(0, 0, 0); strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;'
                        ></path>
                        <path
                            id='primary-2'
                            data-name='primary'
                            d='M18,17h2a1,1,0,0,0,1-1V12L19.28,8.55a1,1,0,0,0-.9-.55H16'
                            // style='fill: none; stroke: rgb(0, 0, 0); strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;'
                        ></path>
                        <path
                            id='primary-3'
                            data-name='primary'
                            d='M14,17H10M8,15a2,2,0,1,0,2,2A2,2,0,0,0,8,15Zm10,2a2,2,0,1,1-2-2A2,2,0,0,1,18,17Z'
                            // style='fill: none; stroke: rgb(0, 0, 0); strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;'
                        ></path>
                    </svg>
                    <h5>Free Shipping</h5>
                </div>
                <div className='services-card'>
                    <svg
                        width='80px'
                        height='80px'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title>support</title>
                        <rect width='24' height='24' fill='none' />
                        <path d='M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z' />
                    </svg>
                    <h5>24/7 Support</h5>
                </div>
                <div className='services-card'>
                    <svg
                        width='80px'
                        height='80px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g opacity='0.4'>
                            <path
                                d='M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402'
                                stroke='#292D32'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M12 7.5V16.5'
                                stroke='#292D32'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </g>
                        <path
                            d='M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2'
                            stroke='#292D32'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M17 3V7H21'
                            stroke='#292D32'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M22 2L17 7'
                            stroke='#292D32'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    <h5>100% Money Back Guarantee</h5>
                </div>
            </div>
        </div>
    );
};

export default Services;
