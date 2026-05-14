import './index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {  MdKeyboardArrowDown,  MdKeyboardArrowUp,} from "react-icons/md"
const Products = () => {
  const [open, setOpen] = useState(false)
  const toggleDropdown = () => { setOpen(!open)  }
  return (
    <li className="products-container">
      <div  className="products-header"onClick={toggleDropdown} >
        <p className="products-title">  Products</p>
        { open  ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />  }
      </div>
      <ul className={`dropdown-items ${ open ? 'show-dropdown' : '' }`} >
 <li className="dropdown-item">
 <Link to="/fashion"  className="dropdown-link"> Fashion</Link></li>
 <li className="dropdown-item">
 <Link to="/electronics"  className="dropdown-link"> Electronics</Link>
</li> 
</ul>
</li> 
)}
export default Products