import Sidebar from '../../components/Sidebar'

import CartItem from '../../components/CartItem'
import {useContext} from 'react'

import CartContext from '../../context/CartContext'
import './index.css'

const Cart = () =>
   {
    const incrementQuantity = id => {

  const updatedCart = cartItems.map(
    eachItem => {

      if (eachItem.id === id) {

        return {
          ...eachItem,
          quantity: eachItem.quantity + 1,
        }

      }

      return eachItem
    }
  )

  setCartItems(updatedCart)

}
const decrementQuantity = id => {

  const product = cartItems.find(
    eachItem => eachItem.id === id
  )

  if (product.quantity === 1) {

    const filteredCart = cartItems.filter(
      eachItem => eachItem.id !== id
    )

    setCartItems(filteredCart)

  } else {

    const updatedCart = cartItems.map(
      eachItem => {

        if (eachItem.id === id) {

          return {
            ...eachItem,
            quantity: eachItem.quantity - 1,
          }

        }

        return eachItem
      }
    )

    setCartItems(updatedCart)

  }

}
    const onClickRemove =id=>{
 const filteredCart = cartItems.filter(
    eachItem => eachItem.id !== id
  )

  setCartItems(filteredCart)

    }
    const {cartItems,setCartItems} = useContext(CartContext)
    const totalPrice = cartItems.reduce(
  (total, eachItem) =>

    total + (
      eachItem.price *
      eachItem.quantity
    ),

  0
)
  return (

    <div className="cart-container">

      <Sidebar />

      <div className="cart-content">

        <h1 className="cart-heading">
          Cart
        </h1>

        <div className="cart-items-list">
{
  cartItems.map(eachItem => (

    <CartItem
      key={eachItem.id}
      title={eachItem.title}
      price={eachItem.price}
      quantity={eachItem.quantity}
      imageUrl={eachItem.image}
      onClickRemove={()=>{
        onClickRemove(eachItem.id)
      }}
      onIncrement={() =>
  incrementQuantity(eachItem.id)
}

onDecrement={() =>
  decrementQuantity(eachItem.id)
}
    />

  ))
}
         
        </div>
<div className="total-container">

  <h1 className="total-heading">
    Total: ₹ {totalPrice}
  </h1>

</div>
      </div>

    </div>

  )
}

export default Cart