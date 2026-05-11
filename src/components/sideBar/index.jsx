import './index.css'
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
//import { AiFillDingtalkCircle } from "react-icons/ai";
import { useState } from 'react';
import SidebarItem from '../SidebarItem'
import Products from '../productsDropdown'
const Sidebar = () => {
  const [siderbar, setsiderbar] = useState(false)

  const toggler = () => {
    setsiderbar(!siderbar)
  }


  return (
    <div className="navbar-container">

      <button
        className="menu-btn"
        onClick={toggler}
      >
        {siderbar
          ? <GoSidebarCollapse />
          : <GoSidebarExpand />
        }
      </button>

     

     {siderbar && (
             <div className="sidebar-menu">
     
     
     
             <div className="logo-section">
            
     
     
               <h2>Cabot Webster</h2>
             </div>
     
             <ul className="menu-items">
     <SidebarItem
  title="Home"
  path="/"
/>
<SidebarItem
  title="Login"
  path="/login"
/>
<SidebarItem
  title="About"
  path="/about"
/>

<SidebarItem
  title="Products"
  path="/products"
/>

<SidebarItem
  title="Cart"
  path="/cart"
/>
               <Products />
     
     
     
             </ul>
     
           </div>)}
    </div>
  )
}

export default Sidebar
