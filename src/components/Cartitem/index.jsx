import './index.css'

const CartItem = props => {

  const {
    title,
    price,
    quantity,
    imageUrl
  } = props

  return (

    <div className="cart-item-container">

      <img
        src={imageUrl}
        alt={title}
        className="cart-image"
      />

      <div className="cart-details">

        <h1 className="cart-title">
          {title}
        </h1>

        <p className="cart-price">
          ₹ {price}
        </p>

        <p className="cart-quantity">
          Quantity: {quantity}
        </p>

        <button className="remove-btn">
          Remove
        </button>

      </div>

    </div>

  )
}

export default CartItem