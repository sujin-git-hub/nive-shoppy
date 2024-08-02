import { Hero, FeaturedProducts } from "../Components";

import customFeatch  from '../Utils';


export const loader = async () => {
const url = '/products?featured=true';
    const response = await customFeatch(url);
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