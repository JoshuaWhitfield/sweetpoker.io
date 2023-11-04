
const Login = (props) => {
    let { width, height } = props;
    return (
        <div className='custom-body'>
            <div className='basic-card' style={{width: width, height: height, display: 'flex', justifyContent: 'center'}}>
                <h3 >Login</h3>
                <div className='input-group'>
                    <input className='bg-dark' type='text' className='form-control' placeholder='Username or Email' ></input>
                </div>
            </div>
        </div>
    );
}
export default Login