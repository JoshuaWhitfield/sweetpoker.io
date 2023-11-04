import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const Product = (props) => {
    let { name, price, value, vip, special, popular, discount } = props;

    if (!name) return null;

    return (
        <Col>
            <div className='box'>
                <span></span>
                <div className='content'>
                    <h2></h2>
                </div>
            </div>
        </Col>
    );
}

export default Product