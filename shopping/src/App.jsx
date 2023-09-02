// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import Photos from './components/Photos'
// import Arts from './components/Arts'
// import Contact from './components/Contact'
// import Navmenu from './components/Navmenu'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          {/* <Navmenu /> */}
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/photos' element={<Photos />} />
          <Route path='/arts' element={<Arts />} />
          <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}
