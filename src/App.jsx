import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomePage from './containers/HomePage/HomePage';
import ProductPage from './containers/ProductPage/ProductPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product/:productId",
      element: <ProductPage />,

    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
