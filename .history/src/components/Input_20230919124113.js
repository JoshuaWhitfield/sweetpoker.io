
const Input = (props) => {
    let { placeholder } = props;
    if (!placeholder) {
        return (
            <input className='form-control' type='text' required></input>
        );
    } else {
        return (
            <input className='form-control' type='text' placeholder={placeholder} style={{width: '100px'}} required></input>
        );
    }
    
}

export default Input