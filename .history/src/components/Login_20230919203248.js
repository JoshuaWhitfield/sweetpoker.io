import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { store } from '../store';
import { setUsername } from '../actions/accountActions';

const Login = (props) => {
    const { width, height } = props;
    const [formData, setFormData] = useState({
        'username': '',
        'password': '',
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        /* check for the username & password's
        existence using PHP before logging in */
        store.dispatch(setUsername(formData.username));
    }
    
    
    return (
        <Form className='basic-card' style={{width: '450px'}}>
            <FormGroup>
                <Label style={{display: 'flex', justifyContent: 'center'}}><p>Login</p></Label>
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
            <Button>

            </Button>
        </Form>
    );
}
export default Login