
const Product = (props) => {
    let { name, price, value, vip, special, popular, discount } = props;

    if (!name) return null;

    return (
        <div className='cust-wrap'>
            
            <div className='box'>
                <span></span>
            </div>

        </div>
    );
}

export default Product