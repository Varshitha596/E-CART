import Sidebar from '../../components/Sidebar'
import CartContext from '../../context/CartContext'
import { useState,useContext,useEffect } from 'react'
import Loader from '../../components/Loader'
import toast from 'react-hot-toast'
import ProductCard from '../../components/ProductCard'
import './index.css'
const Electronics = () => {
const {cartItems,setCartItems}=useContext(CartContext)
const [electronicProducts,setelectronicProducts]=useState([])
const [isLoading, setIsLoading] =useState(true)
const getelctronicproducts = async () => {
const electronicProducts = await fetch( "https://fakestoreapi.com/products/category/electronics" )
const responses = await electronicProducts.json()
setelectronicProducts(responses)
setIsLoading(false)}
 const onClickAddToCart = product => {
  toast.success('Product Added To Cart')
  const productExists = cartItems.find(
  eachItem => eachItem.id === product.id )
  if (productExists) {
    const updatedCart = cartItems.map( eachItem =>{
         if (eachItem.id === product.id) {
          return {
            ...eachItem,
            quantity: eachItem.quantity + 1,
          }}
        return eachItem })
    setCartItems(updatedCart)} 
    else {
    const newProduct = {  ...product, quantity: 1,}
    setCartItems(prevState => [...prevState,  newProduct,])
  }}
useEffect(()=>{getelctronicproducts()},[])
  return (
    <div className="electronics-container">
      <Sidebar />
      <div className="electronics-content">
  <h1 className="electronics-heading">   Electronics Products </h1>
        <div className="electronics-products">{
isLoading?(<Loader/>):(
  electronicProducts.map(eachProduct=>(
    < ProductCard 
    key={eachProduct.id}
    title={eachProduct.title}
    price={eachProduct.price}
    imageUrl={eachProduct.image}
    onClickAddToCart={()=>
      onClickAddToCart(eachProduct)}/>   
  ))
)} </div>
      </div>
    </div>
  )}
export default Electronics