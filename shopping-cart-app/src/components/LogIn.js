// react fonm component

const Form = (props) => {
    return (
        <div className={props.visible ? 'login-form show' : 'login-form'}>
            <form>
                <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Email address</label>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                    />
                    <label htmlFor='exampleInputPassword1'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                    />
                </div>
                <p>
                    Don't have an account? <a href='/register'>Register</a>
                </p>
                <button type='submit' className='btn btn-primary'>
                    Log In
                </button>
            </form>
        </div>
    );
};

export default Form;
