import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Dashboard from './Page/Dashboard'
import Product from './Page/Product'
import AddProduct from './Page/AddProduct'
import Settings from './Page/Settings'


export default function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
    </Routes>
  </BrowserRouter>
 </>
  )
}
