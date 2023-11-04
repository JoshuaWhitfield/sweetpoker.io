
const Input = (props) => {
    let { width, placeholder } = props;
    if (!width) width = '80%';
    if (!placeholder) {
        return (
            <div style={{width: width}}>
                <input className='form-control' type='text' placeholder='Username or Email' required></input>
            </div>
            <input className='form-control' type='text' required></input>
        );
    } else {
        return (
            <div style={{width: width}}>
                <input className='form-control' type='text' placeholder='Username or Email' required></input>
            </div>
        );
    }
    
}

export default Input