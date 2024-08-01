import axios from "axios";


const productionUrl = 'https://strapi-store-server.onrender.com/api';

const customFeatch = axios.create({
    baseURL : productionUrl,
}) 


export default customFeatch;