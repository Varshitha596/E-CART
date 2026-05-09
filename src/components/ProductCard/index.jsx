import './index.css'

const Product=props=>{
const {title, price, imageUrl} = props
    return(
<div className="product-card">
    <img src={imageUrl} alt={title}  className="product-image"/>
    <h1 className="product-title">{title}</h1>
    <p className="product-price">price:₹{price}</p>
    <button  className="cart-btn">Add to cart</button>
</div>
    )
}
export default Product