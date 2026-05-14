import Sidebar from '../../components/Sidebar'
import Loader from '../../components/Loader'
import ProductCard from '../../components/ProductCard'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import './index.css'
const Products = () => {
const [productsList, setProductsList] = useState([])
const [searchInput, setSearchInput] = useState('')
const [isLoading, setIsLoading] = useState(true)
const {cartItems, setCartItems} = useContext(CartContext)
console.log(cartItems)
const filteredProducts = productsList.filter(
eachProduct =>eachProduct.title.toLowerCase().includes(searchInput.toLowerCase()))
const onClickAddToCart = product => {
toast.success('Product Added To Cart')
const productExists = cartItems.find(eachItem => eachItem.id === product.id)
if (productExists) {
const updatedCart = cartItems.map( eachItem => {
       if(eachItem.id === product.id) {
        return { ...eachItem, quantity: eachItem.quantity + 1, }}
return eachItem })
setCartItems(updatedCart)}
else {
const newProduct = { ...product,quantity: 1,}
setCartItems(prevState => [ ...prevState, newProduct,])
  }}
  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products' )
    const data = await response.json()
    console.log(data)
    setProductsList(data)
    setIsLoading(false) }
  useEffect(() => {getProducts() }, [])
  return (
    <div className="products-container">
     <Sidebar />
     <div className="products-content">
    <h1 className="products-heading"> Products</h1>
<input
  type="search"
  placeholder="Search Products"
  className="search-input"
  value={searchInput}
  onChange={event =>
    setSearchInput(event.target.value) }/>
    <div className="products-list">{
    isLoading ? (<Loader />) : (
        filteredProducts.length === 0 ? (
      <p className="no-products">  No Products Found </p>) :
       (filteredProducts.map(eachProduct => (
       <ProductCard
            key={eachProduct.id}
            title={eachProduct.title}
            price={eachProduct.price}
            imageUrl={eachProduct.image}
             onClickAddToCart={() =>
    onClickAddToCart(eachProduct)
  }/>
   )))) }
</div>
</div> </div>
)}
export default Products