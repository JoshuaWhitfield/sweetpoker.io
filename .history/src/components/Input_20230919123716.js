
const Input = (props) => {
    let { width, placeholder } = props;
    if (!width) width = '80%'
    return (
        <>
            <input className='form-control' type='text' placeholder='Username or Email' required></input>
        </>
    );
}

export default Input