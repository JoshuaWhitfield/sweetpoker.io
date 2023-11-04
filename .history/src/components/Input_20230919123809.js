
const Input = (props) => {
    let { width, placeholder } = props;
    if (!width) width = '80%';
    if (!placeholder) {
        return (
            <input className='form-control' type='text' required></input>
        );
    } else {
        return (
            <input className='form-control' type='text' placeholder={placeholder} required></input>
        );
    }
    
}

export default Input