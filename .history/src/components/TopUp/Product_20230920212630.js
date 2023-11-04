import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import VerticalSpacing from "../Styling/VerticalSpacing";

const Product = (props) => {
    let { name, price, value, vip, special, popular, discount } = props;

    return (
        <Col>
            <div className='box'>
                <span></span>
                <div className='content flex jcc aic'>
                    <h2>{name}</h2>
                        <VerticalSpacing width='30px' />
                    <p>${price}</p>
                </div>
            </div>
        </Col>
    );
}

export default Product