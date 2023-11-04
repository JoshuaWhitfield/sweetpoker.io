import { getAllProducts } from "../../slices/Product/productSlice";

const ProductList = (props) => {
    const products = getAllProducts();

    return (
        <Row>
            {
                products.map(
                    (product, idx) => {

                    }
                )
            }
        </Row>
    );
}

export default ProductList