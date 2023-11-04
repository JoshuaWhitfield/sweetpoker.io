import { getAllProducts } from "../../slices/Product/productSlice";
import Product from "./Product";
import { Row } from "reactstrap";

const ProductList = (props) => {
    const products = getAllProducts();

    return (
        <Row>
            <div className='cust-wrap'>
                {
                    products.map(
                        (product, idx) => {
                            <Product 
                                key={idx}
                                name={product.name}
                                price={product.price}
                                value={product.value}
                                vip={product.vip}

                                /* special booleans and percents */
                                special={product.special_offer}
                                popular={product.popular}
                                discount={product.discount} /* percent */
                            /> 
                        }
                    )
                }
            </div>
        </Row>
    );
}

export default ProductList