import './index.css'
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { useState } from 'react';
import SidebarItem from '../SidebarItem'
import Products from '../productsDropdown'
const Sidebar = () => {
const [siderbar,setsiderbar]=useState(false)

const toggler=()=>{
setsiderbar(!siderbar)
}


  return (
    <div className="sidebar-container">

      <div className="top-section">
        <button className="menu-btn" onClick={toggler}>
        {siderbar ? <GoSidebarCollapse className='logo-image'/>:<GoSidebarExpand className='logo-image'/>}


        </button>

        <h1 className="logo">
          Cabot Websters
        </h1>
      </div>

{siderbar && ( <div className="sidebar-menu">

  

        <div className="logo-section">
         <AiFillDingtalkCircle className='logo-image'/>
          

          <h2>Cabot Webster</h2>
        </div>

        <ul className="menu-items">

          <SidebarItem title="Home" />

          <SidebarItem title="about" />

         <SidebarItem title="cart" />
       
           <Products/>

     

        </ul>

      </div>)}
     
    </div>
  )
}

export default Sidebar