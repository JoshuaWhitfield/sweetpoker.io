import Input from "./Input";
import { Row, Col } from "reactstrap";

const Login = (props) => {
    let { width, height } = props;
    return (
        <div className='custom-body'>
            <div className='basic-card center-content' style={{width: width, height: height}}>
                <Row >
                    <Col>
                        <h3 >Login</h3>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <form>
                            <Input placeholder='Username or Email' />
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Login