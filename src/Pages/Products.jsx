import { Filters, PaginationContainer, ProductsContainer } from "../Components";
import customFeatch from "../Utils";



export const loader = async ({ request }) => {
    const url = '/products';
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await customFeatch(url, { params });
  
    const products = response.data.data;
    const meta = response.data.meta;
  
    return { products, meta, params };
  };


const Products = (props) => {
    
    return <>
        <Filters />
        <ProductsContainer />
        <PaginationContainer />
    </>
}

export default Products;

