
const Input = (props) => {
    let { width, placeholder } = props;
    if (!width) width = '80%';
    if (!placeholder) {
        <div style={{width: width}}></div>
        return (
            <input className='form-control' type='text' required></input>
        );
    } else {
        return (
            <input className='form-control' type='text' placeholder='Username or Email' required></input>
        );
    }
    
}

export default Input