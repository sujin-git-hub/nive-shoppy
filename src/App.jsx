
import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct} from "./Pages"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { ErrorElement } from './Components';
import { store } from './store';
import { action as loginAction } from './Pages/Login';
import { action as registerAction } from './Pages/Register';
import { loader as productSLoader } from './Pages/Products';
import { loader as landingLoader } from './Pages/Landing';
import { loader as productLoader } from './Pages/SingleProduct';
import { loader as ordersLoader } from './Pages/Orders';


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
        errorElement: <ErrorElement />,
        loader: productSLoader
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
        element: <Orders />,
        loader: ordersLoader(store),
      }]  
  },{
    path : "login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },{
    path : "register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  }
]);
return(
  <RouterProvider router={router}/>
)

}

export default App