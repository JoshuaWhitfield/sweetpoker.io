
const Input = (props) => {
    let { width, placeholder } = props;
    if (!width) width = '100%';
    if (!placeholder) {
        return (
            <div className='form-group' style={{width: width}}>
                <input className='form-control' type='text' required></input>
            </div>
            
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