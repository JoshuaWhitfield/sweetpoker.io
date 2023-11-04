import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import VerticalSpacing from "../Styling/VerticalSpacing";

const Product = (props) => {
    let { name, price, value, vip, special, popular, discount } = props;

    return (
        <Col className='col-4 mx-auto'>
            <div className='box flex jcc aic'>
                <div className='content flex jcc aic'>
                    <h2 className='product-text'>{name}</h2>
                        <VerticalSpacing width='30px' />
                    <p className='product-price'>${price}</p>
                </div>
            </div>
        </Col>
    );
}

export default Product