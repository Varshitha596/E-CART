import './index.css'
import {Link} from 'react-router-dom'
const Products = () => {
  return (
    <li className="products-container">

      <p className="products-title">
        Products
      </p>

<ul className="dropdown-items">

  <li id="dropdown-item">
    <Link
      to="/fashion"
      className="dropdown-link"
    >
      Fashion
    </Link>
  </li>

  <li className="dropdown-item">
    <Link
      to="/electronics"
      className="dropdown-link"
    >
      Electronics
    </Link>
  </li>




      </ul>

    </li>
  )
}

export default Products