import './index.css'

const CartItem = props => {

  const {
    title,
    price,
    quantity,
    imageUrl,
    onClickRemove,
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

        <button className="remove-btn" onClick={onClickRemove}>
          Remove
        </button>

      </div>

    </div>

  )
}

export default CartItem