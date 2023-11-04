import Input from "./Input";
import { Row, Col } from "reactstrap";

const Login = (props) => {
    let { width, height } = props;
    return (
        <div className='custom-body'>
            <div className='basic-card' style={{width: width, height: height, display: 'flex', justifyContent: 'center'}}>
                <h3 className='float-end' >Login</h3>
                <div>
                    <br />
                    <form>
                        <Input placeholder='Username or Email' />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login