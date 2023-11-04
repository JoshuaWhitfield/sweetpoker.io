import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { store } from '../store';
import { setUsername } from '../actions/accountActions';
import crypto from 'crypto-js'

const Login = (props) => {
    const { width, height } = props;
    const [formData, setFormData] = useState({
        'username': '',
        'password': '',
    })
    const [md5Hash, setToMd5] = useState('')
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        /* check for the username & password's
        existence using PHP before logging in */
        const copyData = new formData
        setFormData({
            ...formData,
            password: crypto.MD5(copyData.password).toString(),
        });
        console.log(formData);
        store.dispatch(setUsername(formData.username));
        console.log(formData);
    }
    
    
    return (
        <div className='custom-body' style={{width: '650px'}}>
        <Form className='basic-card mx-auto'>
            <FormGroup>
                <Label style={{display: 'flex', justifyContent: 'center'}}><h3>Log In</h3></Label>
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
                {/* <Label for='password'><p>Password:&nbsp;</p></Label> */}
                <Input 
                    type='text'
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
            </FormGroup>
            <Button className='button mx-auto' type='submit' onClick={handleSubmit} style={{height: '46px', width: '86px', display: 'flex', justifyContent: 'center'}}>
                <p>Login</p>
            </Button>
            <br />
        </Form>
        </div>
    );
}
export default Login