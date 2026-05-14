import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import {useState,useEffect} from 'react'
import CartContext from './context/CartContext'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import Fashion from './pages/Fashion'
import Electronics from './pages/Electronics'
import Login from './pages/Login'
import {Toaster} from 'react-hot-toast'
const App = () => {
  const [cartItems, setCartItems] = useState(()=>{
    const savedCart = localStorage.getItem('cartData')
    return savedCart ? JSON.parse(savedCart) : [] })
useEffect(() => {localStorage.setItem('cartData',JSON.stringify(cartItems))}, [cartItems])
  return (
    <CartContext.Provider
      value={{cartItems, setCartItems, }} >
        <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={  <ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path="/products"  element={  <ProtectedRoute><Products /></ProtectedRoute>}/>
          <Route path="/cart" element={  <ProtectedRoute><Cart /></ProtectedRoute>} />
         <Route  path="/about"  element={  <ProtectedRoute><About /></ProtectedRoute>}  />
          <Route path="/fashion"  element={  <ProtectedRoute><Fashion /></ProtectedRoute>}  />
          <Route  path="/electronics"  element={  <ProtectedRoute><Electronics /></ProtectedRoute>}   />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}
export default App