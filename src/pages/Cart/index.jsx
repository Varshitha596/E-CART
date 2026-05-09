import Sidebar from '../../components/Sidebar'

import CartItem from '../../components/CartItem'

import './index.css'

const Cart = () => {
  return (
    <div>

      <Sidebar />

      <h1>Cart Page</h1>

      <CartItem
        title="Nike Shoes"
        price="2500"
        quantity="2"
        imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      />

    </div>
  )
}

export default Cart