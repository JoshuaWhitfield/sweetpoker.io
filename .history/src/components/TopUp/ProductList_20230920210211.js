import { getAllProducts } from "../../slices/Product/productSlice";

const ProductList = (props) => {
    const products = getAllProducts();

    return (
        <Row>
            {
                products.map(
                    (product, idx) => {
                        <Product 
                            name={product.name}
                            price={product.price}
                            value={product.value}
                            vip={product.vip}

                            /* special booleans and percents */
                            discount={product.discount} /* percent */
                            special={product.special_offer}
                            popular={product.popular}
                        /> 
                    }
                )
            }
        </Row>
    );
}

export default ProductList