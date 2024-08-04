import { Filters, PaginationContainer, ProductsContainer } from "../Components";
import customFeatch from "../Utils";




export const loader = async ()=>{
    const url = '/products';
    const response = await customFeatch(url);
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta };
}

const Products = (props) => {
    
    return <>
        <Filters />
        <ProductsContainer />
        <PaginationContainer />
    </>
}

export default Products;

