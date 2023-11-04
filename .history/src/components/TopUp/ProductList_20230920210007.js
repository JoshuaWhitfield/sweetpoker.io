import { getAllProducts } from "../../slices/Product/productSlice";

const ProductList = (props) => {
    const products = getAllProducts();

    return (
        <Row>
            {
                products.map(
                    (product, idx) => {
                        <Product name={product.name} price={product.price} vip={product.vip} discount={product.discount}  /> 
                    }
                )
            }
        </Row>
    );
}

export default ProductList