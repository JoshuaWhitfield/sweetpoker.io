import Input from "./Input";

const Login = (props) => {
    let { width, height } = props;
    return (
        <div className='custom-body'>
            <div className='basic-card center-content' style={{width: width, height: height}}>
                <h3 >Login</h3>
                <div className='input-group' style={{width: '80%'}}>
                    <form>
                        <Input className='debug' placeholder='Username or Email' />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login