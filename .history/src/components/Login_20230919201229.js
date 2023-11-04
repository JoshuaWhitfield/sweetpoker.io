import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { store } from '../store';
import { setUsername } from '../actions/accountActions';

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

handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    /* check for the username & password's
    existence using PHP before logging in */
    store.dispatch(setUsername(formData[username]));
}

const Login = (props) => {
    let { width, height } = props;
    return (
        <Form>
            <FormGroup>
                <Label ></Label>
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
                <Label ></Label>
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