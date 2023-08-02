import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Iphone from './Component/Iphone/Iphone.jsx';
import Sumsang from './Component/Sumsang/Sumsang.jsx';
import Oppo from './Component/Oppo/Oppo.jsx';
import ShowDetils from './Component/ShowDetils/ShowDetils.jsx';
import Error from './Component/Error/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Iphone></Iphone>,
        loader:()=>fetch(`iphone.json`)
      },
      {
        path: "/samsang",
        element: <Sumsang></Sumsang>,
        loader:()=>fetch('samsung.json')
      },
      {
        path: "/oppo",
        element: <Oppo></Oppo>
      },
      {
        path: "phone/:phoneId",
        element: <ShowDetils></ShowDetils>,
        loader:(params)=>fetch(`https://openapi.programming-hero.com/api/phone/${params}`)
      },
      {
        path:'*',
        element: <Error></Error>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
