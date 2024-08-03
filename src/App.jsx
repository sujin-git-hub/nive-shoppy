
import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct} from "./Pages"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { ErrorElement } from './Components';
// loaders
import { loader as landingLoader } from './Pages/Landing';
import { loader as productLoader } from './Pages/SingleProduct';




const App = ()=>{
  const router = createBrowserRouter([{
    path : "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },{
        path : "products",
        element: <Products />,
        errorElement: <ErrorElement />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: productLoader,
      },{
        path : "about",
        element: <About />,
        errorElement: <ErrorElement />
      },{
        path : "cart",
        element: <Cart />
      },{
        path : "checkout",
        element: <Checkout />
      },{
        path : "orders",
        element: <Orders />
      }]  
  },{
    path : "login",
    element: <Login />
  },{
    path : "register",
    element: <Register />
  }
]);
return(
  <RouterProvider router={router}/>
)

}

export default App