import { PRODUCTS } from "../../app/shared/PRODUCTS";

export const getAllProducts = () => {
    return PRODUCTS()
}

export const getProductByValue = (value) => {
    const products = getAllProducts();
    let result = false;
    
}