import { Col } from "reactstrap";

const Product = (props) => {
    let { name, price, value, vip, special, popular, discount } = props;

    if (!name) return null;

    return (
        <Col>
            <div className='box'>
                <span></span>
            </div>
        </Col>
    );
}

export default Product