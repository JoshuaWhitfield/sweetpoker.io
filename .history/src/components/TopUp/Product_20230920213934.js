import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import VerticalSpacing from "../Styling/VerticalSpacing";

const Product = (props) => {
    let { name, price, value, vip, special, popular, discount } = props;

    return (
        <Col className='col-3 mx-auto debug'>
            <div className='box debug2'>
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