
const Login = (props) => {
    let { width, height } = props;
    return (
        <div className='custom-body'>
            <div className='basic-card center-content' style={{width: width, height: height}}>
                <h3 >Login</h3>
                <div className='input-group' style={{width: '70%'}}>
                    <input className='form-control' type='text' placeholder='Username or Email' required></input>
                </div>
            </div>
        </div>
    );
}
export default Login