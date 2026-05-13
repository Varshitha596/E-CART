import './index.css'

const CartItem = props => {

  const {
    title,
    price,
    quantity,
    imageUrl,
    onClickRemove,
     onIncrement,
     onDecrement,
  } = props

  return (

    <div className="cart-item">

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
          ₹{price}
        </p>

        <p className="cart-quantity">
          Quantity: {quantity}
        </p>
<div className="quantity-container">

  <button
    className="quantity-btn"
    onClick={onDecrement}
  >
    -
  </button>

  <p className="quantity-value">
    {quantity}
  </p>

  <button
    className="quantity-btn"
    onClick={onIncrement}
  >
    +
  </button>

</div>
        <button className="remove-btn" onClick={onClickRemove}>
          Remove
        </button>

      </div>

    </div>

  )
}

export default CartItem