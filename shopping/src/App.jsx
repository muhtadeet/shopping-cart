import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Categories from './components/Categories'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          {/* <Navmenu /> */}
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
