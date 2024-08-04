import { Filters, PaginationContainer, ProductsContainer } from "../Components";
import customFeatch from "../Utils";




export const loader = async ()=>{
    const url = '/products';
    const response = await customFeatch(url);
    const products = response.data.data;
    return {products};
}

const Products = (props) => {
    
    return <>
        <Filters />
        <ProductsContainer />
        <PaginationContainer />
    </>
}

export default Products;