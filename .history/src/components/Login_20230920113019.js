import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { store } from '../store';
import { setUsername } from '../actions/accountActions';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';


const Login = (props) => {
  const { width, height } = props;
  const [formData, setFormData] = useState({
    'username': '',
    'password': '',
  });
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  const [errors, setErrors] = useState({
    passwordLength: false,
    validEmail: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error messages when user types
    setErrors({
      passwordLength: false,
      validEmail: false,
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state for password visibility
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for password length
    if (formData.password.length < 6) {
      setErrors({ ...errors, passwordLength: true });
      return;
    }

    if (formData.password.length > 15) {
        setErrors({ ...errors, passwordLength: true });
        return;
    }
    // Check for a valid email using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.username)) {
      setErrors({ ...errors, validEmail: true });
      return;
    }
    
    // If no errors, continue with login
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
            placeholder='Email'
            value={formData.username}
            onChange={handleChange}
            className='custom-input mx-auto'
            style={{
              width: '70%',
            }}
          />
          {errors.validEmail && <p className="error-message">Invalid email format</p>}
        </FormGroup>
        <FormGroup>
          <Input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
            name='password'
            id='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='custom-input mx-auto'
            style={{
              width: '70%',
            }}
          />
          {errors.passwordLength && <p className="error-message">Password must be 6 to 15 characters!</p>}
          {/* Password visibility toggle button */}
            <Button
            className='password-toggle util-button'
            onClick={togglePasswordVisibility}
            style={{
                
                margin: '0px 0px 20px 480px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
        </FormGroup>

        <Button className='button mx-auto' type='submit' onClick={handleSubmit} style={{ height: '46px', width: '86px', display: 'flex', justifyContent: 'center' }}>
          <p>Login</p>
        </Button>
        <Link><p className='light-text'>forgot password</p></Link>
        <Link><p className='light-text'>create account</p></Link>
        <br />
      </Form>
    </div>
  );
}

export default Login;