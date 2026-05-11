import './index.css'

const ProductCard = props => {

  const {
    title,
    price,
    imageUrl,
    onClickAddToCart,
  } = props
    return(
<div className="product-card">
    <img src={imageUrl} alt={title}  className="product-image"/>
    <h1 className="product-title">{title}</h1>
    <p className="product-price">price:₹{price}</p>
   <button
  className="cart-btn"
  onClick={onClickAddToCart}
>
  Add To Cart
</button>
</div>
    )
}
export default ProductCard