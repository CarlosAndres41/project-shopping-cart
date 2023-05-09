const MainContent = () => {
    return (
        <div className='main-content'>
            <div className='left-content'>
                <h1>Augue Interdum Velit Euismod In Pellentesque Massa</h1>
                <p>
                    euismod nisi porta lorem mollis aliquam ut porttitor leo a
                    diam sollicitudin tempor
                </p>
                <a href='/shop' className='start-btn'>
                    Start Shopping
                </a>
            </div>
            <div className='right-content'>
                <img
                    className='main-image'
                    src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    alt='main'
                />
            </div>
        </div>
    );
};

export default MainContent;
