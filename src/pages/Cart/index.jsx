import Sidebar from '../../components/Sidebar'

import CartItem from '../../components/CartItem'

import './index.css'

const Cart = () => {
  return (

    <div className="cart-container">

      <Sidebar />

      <div className="cart-content">

        <h1 className="cart-heading">
          Cart
        </h1>

        <div className="cart-items-list">

          <CartItem
            title="Nike Shoes"
            price="2500"
            quantity="1"
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          />

          <CartItem
            title="Smart Watch"
            price="4000"
            quantity="2"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          />

        </div>

      </div>

    </div>

  )
}

export default Cart