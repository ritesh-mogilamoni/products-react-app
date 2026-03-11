import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import ContactUs from "./components/ContactUs";

function App() {
  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "productlist",
          element: <ProductList />,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
        {
          path: "product",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routingObj} />;
}

export default App;
