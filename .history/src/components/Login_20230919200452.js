import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { store } from '../store';
import { setUsername } from '../actions/accountActions';

const [formData, setFormData] = useState({
    'username': '',
    'email': '',
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

    const {name, value} = e.target;
    if (name == username) {store.dispatch(setUsername(e.name))}
}

const Login = (props) => {
    let { width, height } = props;
    return (
        
    );
}
export default Login