
const Login = (props) => {
    let { width, height } = props;
    return (
        <div className='custom-body'>
            <div className='basic-card center-content' style={{width: width, height: height}}>
                <h3>Login</h3><br />
                <div className='input-group'>
                    <input className='bg-dark' type='text' className='form-control' placeholder='Username or Email' ></input>
                </div>
            </div>
        </div>
    );
}
export default Login