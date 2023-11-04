import { getAllProducts } from "../../slices/Product/productSlice";
import Product from "./Product";
import { Row } from "reactstrap";

const ProductList = (props) => {
    const products = getAllProducts();
    console.log(products)
    return (
        <div style={{width: '1200px', marginRight: '30px'}}>
            <div className='cust-wrap'>
                <Row>
                    {
                        products.map(
                            (product, idx) => {
                                return (
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
                                );
                            }
                        )
                    }
                </Row>
            </div>
        </div>
    );
}

export default ProductList