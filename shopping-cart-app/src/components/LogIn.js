import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import { Link } from 'react-router-dom';

const Form = (props) => {
    return (
        <div className={props.visible ? 'login-form show' : 'login-form'}>
            <div className='login-head'>
                <h1>Log In</h1>
                <Icon
                    className='close-login-btn'
                    path={mdiClose}
                    size={1}
                    onClick={props.handleFormVisibility}
                />
            </div>
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
                <p className='register-link'>
                    Don't have an account? <Link to='/register'>Register</Link>
                </p>
                <button
                    type='button'
                    className='login-confirm-btn'
                    onClick={props.handleFormVisibility}
                >
                    Log In
                </button>
            </form>
        </div>
    );
};

export default Form;
