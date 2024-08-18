
import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct} from "./Pages"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ErrorElement } from './Components';
import { store } from './store';
import { action as loginAction } from './Pages/Login';
import { action as registerAction } from './Pages/Register';
import { action as checkoutAction } from './Components/CheckoutForm';
import { loader as productSLoader } from './Pages/Products';
import { loader as landingLoader } from './Pages/Landing';
import { loader as productLoader } from './Pages/SingleProduct';
import { loader as ordersLoader } from './Pages/Orders';
import { loader as checkoutLoader} from "./Pages/Checkout";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});


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
        loader: landingLoader(queryClient),
      },{
        path : "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productSLoader(queryClient)
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: productLoader(queryClient),
      },{
        path : "about",
        element: <About />,
        errorElement: <ErrorElement />
      },{
        path : "cart",
        element: <Cart />
      },{
        path : "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store,queryClient),
        action: checkoutAction(store),
      },{
        path : "orders",
        element: <Orders />,
        loader: ordersLoader(store,queryClient),
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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

}

export default App