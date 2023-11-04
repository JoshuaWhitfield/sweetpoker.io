import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import VerticalSpacing from "../Styling/VerticalSpacing";

const Product = (props) => {
    let { name, price, value, vip, special, popular, discount, prod_id } = props;

    const handleTrigger = (e, prod_id, email) => {
        e.preventDefault();
        Paddle.Checkout.Open({
            product: prod_id,
            email: email,
            successCallback: (data, err) => {
                console.log(data);
                if (err) console.log('error: '+err)
            }
        })
    }

    return (
        <Col className='col-4 mx-auto'>
            <div onClick={} className='box flex jcc aic'>
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