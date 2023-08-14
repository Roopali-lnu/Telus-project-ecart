import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({username, email, password}));
  };
  return (
    <div className='registration-page'>
      <form className='registration-form' onSubmit={onSubmit}>
        <h3>Registation Form</h3>
        <div className='input-group'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={onChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          />{' '}
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />{' '}
        </div>
        <button type='submit'>Register</button>
        <p>
          Already have an account? <Link to='/login '>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register ;