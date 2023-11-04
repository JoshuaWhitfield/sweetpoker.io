import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { store } from '../store';
import { setUsername } from '../actions/accountActions';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const Login = (props) => {
  const { width, height } = props;
  const [formData, setFormData] = useState({
    'username': '',
    'password': '',
  });
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state for password visibility
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /* check for the username & password's
       existence using PHP before logging in */
    // crypto.MD5(formData.password).toString()

    /* error handling */

    console.log(formData);
    store.dispatch(setUsername(formData.username));
  }

  return (
    <div className='custom-body' style={{ width: '650px' }}>
      <Form className='basic-card mx-auto'>
        <FormGroup>
          <Label style={{ display: 'flex', justifyContent: 'center' }}><h3>Log In</h3></Label>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='Username or Email'
            value={formData.username}
            onChange={handleChange}
            className='mx-auto'
            style={{
              width: '70%',
            }}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
            name='password'
            id='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='mx-auto'
            style={{
              width: '70%',
            }}
          />
          {/* Password visibility toggle button */}
          <Button
            className='password-toggle'
            onClick={togglePasswordVisibility}
            style={{
              position: 'relative',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </FormGroup>
        <Button className='button mx-auto' type='submit' onClick={handleSubmit} style={{ height: '46px', width: '86px', display: 'flex', justifyContent: 'center' }}>
          <p>Login</p>
        </Button>
        <br />
      </Form>
    </div>
  );
}

export default Login;
