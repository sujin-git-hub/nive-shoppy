import { Hero, FeaturedProducts } from "../Components";
import customFeatch  from '../Utils';


const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
    return <>
    <Hero/>
    <FeaturedProducts />
    </>
}

export default Landing;