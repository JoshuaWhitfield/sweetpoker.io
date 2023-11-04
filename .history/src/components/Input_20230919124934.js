
const Input = (props) => {
    let { width, placeholder } = props;
    if (!width) width = '100%';
    if (!placeholder) {
        return (
            <div className='input-group' style={{width: '80%'}}>
                <input className='form-control' type='text' required></input>
            </div>
            
        );
    } else {
        return (
            <div className='input-group' style={{width: '80%'}}>
                <input className='form-control' type='text' placeholder='Username or Email' required></input>
            </div>
        );
    }
    
}

export default Input