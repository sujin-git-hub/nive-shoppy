
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
        element: <Landing />,
      },{
      path : "products",
      element: <Products />,
      errorElement: <Error />,
    },{
      path : "about",
      element: <About />,
      errorElement: <Error />,
    },{
      path : "cart",
      element: <Cart />,
      errorElement: <Error />,
    },{
      path : "checkout",
      element: <Checkout />,
      errorElement: <Error />,
    },{
      path : "orders",
      element: <Orders />,
      errorElement: <Error />,
    }]  
  }]);
return(
  <RouterProvider router={router}/>
)

}

export default App