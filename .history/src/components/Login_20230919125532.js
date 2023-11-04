import Input from "./Input";
import { Row, Col } from "reactstrap";

const Login = (props) => {
    let { width, height } = props;
    return (
        <div className='custom-body'>
            <div className='basic-card center-content' style={{width: width, height: height}}>
                <h3 className='float-end' >Login</h3>
                <div>
                    <br /><br /><br /><br />
                    <form>
                        <Input placeholder='Username or Email' />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login