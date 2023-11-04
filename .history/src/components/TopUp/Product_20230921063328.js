import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import VerticalSpacing from "../Styling/VerticalSpacing";

const Product = (props) => {
    let { name, price, value, vip, special, popular, discount, prod_id } = props;

    const Paddle = window.Paddle;
    console.log(Paddle);
    const handleTrigger = (e, prod_id, email) => {
        e.preventDefault();
        Paddle.Checkout.open({
            product: prod_id,
            email: email,
            successCallback: (data, err) => {
                console.log('data: '+data);
                if (err) console.log('error: '+err)
            }
        })
    }

    return (
        <Col className='col-4 mx-auto'>
            <div onClick={handleTrigger(prod_id, store.getState().account.email)} className='box flex jcc aic'>
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