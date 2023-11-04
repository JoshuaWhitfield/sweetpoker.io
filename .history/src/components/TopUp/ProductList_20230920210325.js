import { getAllProducts } from "../../slices/Product/productSlice";

const ProductList = (props) => {
    const products = getAllProducts();

    return (
        <Row>
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
        </Row>
    );
}

export default ProductList