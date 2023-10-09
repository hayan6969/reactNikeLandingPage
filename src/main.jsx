import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Shoes from './components/Shoes.jsx'
import Shirts from './components/Shirts.jsx'
import CartComponent from './components/CartComponent.jsx'

const router = createBrowserRouter([
  {
    path:'reactNikeLandingPage/',
    element:<App/>,
    children:[
      {path:"",
      element:<Home/>}
    
    ,{
      path: 'reactNikeLandingPage/shop', // Make sure this matches the NavLink "to" attribute in Nav.jsx
      element: <Products/>, // Render the Products component for the "/Shop" path
    },
    {
      path:"reactNikeLandingPage/shop/reactNikeLandingPage/Shoes",
      element:<Shoes/>
    },
    {
      path:"reactNikeLandingPage/shop/reactNikeLandingPage/Shirts",
      element:<Shirts/>
    },
    {
      path:"reactNikeLandingPage/cart",
      element:<CartComponent/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
