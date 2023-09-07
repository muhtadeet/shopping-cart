import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Categories from './components/Categories'
import ProdPage from './components/ProdPage'
import { CartProvider } from 'react-use-cart'

export default function App() {
  return (
    <>   
      <BrowserRouter>
      <CartProvider>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path="/product/:id" element={<ProdPage />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </>
  )
}
