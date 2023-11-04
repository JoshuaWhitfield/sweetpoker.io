import Input from "./Input";
import { Row, Col } from "reactstrap";

const Login = (props) => {
    let { width, height } = props;
    return (
        <div className='custom-body'>
            <div className='basic-card center-content' style={{width: width, height: height}}>
                <Col className='col-12'>
                    <h3 >Login</h3>
                </Col>
                <Col>
                    <form>
                        <Input placeholder='Username or Email' />
                    </form>
                </Col>
            </div>
        </div>
    );
}
export default Login