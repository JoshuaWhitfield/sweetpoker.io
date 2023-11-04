import Input from "./Input";
import { Row, Col } from "reactstrap";

const Login = (props) => {
    let { width, height } = props;
    return (
        <div>
            <h3 className='mx-auto' >Login</h3>
            <div className='basic-card' style={{width: width, height: height, display: 'flex', justifyContent: 'center'}}>
                
                    <form>
                        <Input placeholder='Username or Email' />
                    </form>
            </div>
        </div>
    );
}
export default Login