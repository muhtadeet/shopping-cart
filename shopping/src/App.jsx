import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Categories from './components/Categories'
import ProdPage, { CartContext } from './components/ProdPage'
import { useState } from "react";

export default function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  }
  return (
    <>
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path="/product/:id" element={<ProdPage />} />
      </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}
