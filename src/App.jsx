
import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct} from "./Pages"
import { RouterProvider, createBrowserRouter } from "react-router-dom"


const App = ()=>{
  const router = createBrowserRouter([{
    path : "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <Landing />
      },{
        path : "products",
        element: <Products />
      },{
        path : "about",
        element: <About />
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