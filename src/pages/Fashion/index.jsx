import Sidebar from '../../components/Sidebar'
import CartContext from '../../context/CartContext'
import ProductCard from '../../components/ProductCard'
import { useState,useContext,useEffect } from 'react'
import Loader from '../../components/Loader'
import toast from 'react-hot-toast'
import './index.css'
const Fashion = () => {
  const {cartItems, setCartItems} =useContext(CartContext)
  const [fashionProducts, setFashionProducts]=useState([])
  const [isLoading, setIsLoading] =useState(true)
  const getFashionProducts =async() =>{
  const mensResponse = fetch("https://fakestoreapi.com/products/category/men's clothing" )
  const womensResponse = fetch("https://fakestoreapi.com/products/category/women's clothing")
 const responses = await Promise.all([mensResponse,womensResponse,])
   const mensData =await responses[0].json()
  const womensData = await responses[1].json()
  const combinedProducts = [...mensData,...womensData,]
   setFashionProducts(combinedProducts)
  setIsLoading(false)}
  const onClickAddToCart = product => {
  toast.success('Product Added To Cart')
  const productExists = cartItems.find(
    eachItem => eachItem.id === product.id )
  if (productExists) 
    {
    const updatedCart = cartItems.map( eachItem =>{
         if (eachItem.id === product.id) {
          return {
            ...eachItem,
            quantity: eachItem.quantity + 1,
          }}
        return eachItem
      }
    )
    setCartItems(updatedCart)} 
    else {
    const newProduct = {  ...product, quantity: 1,}
    setCartItems(prevState => [...prevState,  newProduct,])
  }}
  useEffect(() => { getFashionProducts()}, [])
  return (
    <div className="fashion-container">
      <Sidebar />
      <div className="fashion-content">
        <h1 className="fashion-heading"> Fashion Products </h1>
        <div className="fashion-products"> 
{
  isLoading ? (
    <Loader />) : 
  (
    fashionProducts.map(eachProduct => (
      <ProductCard
        key={eachProduct.id}
        title={eachProduct.title}
        price={eachProduct.price}
        imageUrl={eachProduct.image}
        onClickAddToCart={() =>
          onClickAddToCart(eachProduct)}/>
    )))}
        </div>
      </div>
    </div>
  )}
export default Fashion