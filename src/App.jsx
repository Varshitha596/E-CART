import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import Fashion from './pages/Fashion'
import Electronics from './pages/Electronics'
import Login from './pages/Login'

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
       <Route
          path="/"
          element={<Home />}
        />
         <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/fashion"
          element={<Fashion />}
        />

        <Route
          path="/electronics"
          element={<Electronics />}
        />
    </Routes>
    </BrowserRouter>
  )
}

export default App