import { Hero } from "../Components";

import customFeatch  from '../Utils';
const url = '/products?featured=true';


export const loader = async () => {
    const response = await customFeatch(url);
    console.log(response);
    const products = response.data.data;
    return { products };
  };
  

const Landing = () => {
    return <>
    <Hero/>
    </>
}

export default Landing;