import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import "./index.css";

//routes import
import HomePage from "./routes/HomePage"
import Product from "./routes/Product"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomePage/>} />
      <Route path='product/:prodId' element={<Product/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)