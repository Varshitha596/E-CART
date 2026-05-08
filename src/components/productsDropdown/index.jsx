import './index.css'

const Products = () => {
  return (
    <li className="products-container">

      <p className="products-title">
        Products
      </p>

      <ul className="dropdown-items">

        <li className="dropdown-item">
          Fashion
        </li>

        <li className="dropdown-item">
          Electronics
        </li>

        <li className="dropdown-item">
          Daily Wear
        </li>

      </ul>

    </li>
  )
}

export default Products