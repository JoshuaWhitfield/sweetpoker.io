import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
};

const Login = (props) => {
    let { width, height } = props;
    return (
        
    );
}
export default Login