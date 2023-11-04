import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { store } from '../store';

const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
})

const handleChange = (e) => {
    const {username, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
}

handleSubmit = (e) => {

    const {username, value} = e.target;
    
}

const Login = (props) => {
    let { width, height } = props;
    return (
        
    );
}
export default Login