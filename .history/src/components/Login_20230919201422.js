import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { store } from '../store';
import { setUsername } from '../actions/accountActions';

const Login = (props) => {
    let { width, height } = props;
    return (
        <Form>
            <FormGroup>
                <Label for='username'>Username:&nbsp;</Label>
                <Input 
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Username or Email'
                    value={formData.username}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for='password'>Password:&nbsp;</Label>
                <Input 
                    type='text'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button>

            </Button>
        </Form>
    );
}
export default Login