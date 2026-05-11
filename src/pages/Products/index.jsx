import Sidebar from '../../components/Sidebar'
import Loader from '../../components/Loader'
import ProductCard from '../../components/ProductCard'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import {useEffect, useState} from 'react'

import './index.css'


const Products = () => {

  const [productsList, setProductsList] = useState([])
const [searchInput, setSearchInput] = useState('')
  const [isLoading, setIsLoading] = useState(true)
const {cartItems, setCartItems} = useContext(CartContext)
console.log(cartItems)
const filteredProducts = productsList.filter(
  eachProduct =>eachProduct.title.toLowerCase().includes(searchInput.toLowerCase())
)

const onClickAddToCart = product => {

  setCartItems(prevState => [
    ...prevState,
    product,
  ])

}

  const getProducts = async () => {

    const response = await fetch(
      'https://fakestoreapi.com/products'
    )

    const data = await response.json()

    console.log(data)

    setProductsList(data)

    setIsLoading(false)
  }


  useEffect(() => {

    getProducts()

  }, [])


  return (

    <div className="products-container">

      <Sidebar />

      <div className="products-content">

        <h1 className="products-heading">
          Products
        </h1>
<input
  type="search"
  placeholder="Search Products"
  className="search-input"
  value={searchInput}
  onChange={event =>
    setSearchInput(event.target.value)
  }
/>
       <div className="products-list">

  {
    isLoading ? (

      <Loader />

    ) : (

      filteredProducts.length === 0 ? (

        <p className="no-products">
          No Products Found
        </p>

      ) : (

        filteredProducts.map(eachProduct => (

          <ProductCard
            key={eachProduct.id}
            title={eachProduct.title}
            price={eachProduct.price}
            imageUrl={eachProduct.image}
             onClickAddToCart={() =>
    onClickAddToCart(eachProduct)
  }
          />

        ))

      )

    )
  }

</div>
      </div>

    </div>

  )
}

export default Products