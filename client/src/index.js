import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import NavBar from './NavBar';
import Principal from './Principal';
import Sesion from './Sesion';
import Create from './CreateAcount';
import Admin from './Admin';
import Shop from './shop';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Principal />,
      },
    ],
  },
  {
    path: "/sesion",
    element: <NavBar />,
    children: [
      {
        path: "/sesion",
        element: <Sesion />,
      },
    ],
  },
  {
    path: "/sesion/create",
    element: <NavBar />,
    children: [
      {
        path: "/sesion/create",
        element: <Create />,
      },
    ],
    
  },
  {
    path: "/admin",
    element: <NavBar />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
    
  },
  {
    path: "/shop",
    element: <NavBar />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
    
  },

]);


//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
