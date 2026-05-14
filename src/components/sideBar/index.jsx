import './index.css'
import {useNavigate} from 'react-router-dom'
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import toast from 'react-hot-toast'
//import { AiFillDingtalkCircle } from "react-icons/ai";
import { useState } from 'react';
import SidebarItem from '../SidebarItem'
import Products from '../productsDropdown'
const Sidebar = () => {
  const navigate = useNavigate()
  const onClickLogout = () => {   
     localStorage.removeItem('isLoggedIn') 
      toast.success('Logged Out')
    navigate('/login')}
  const [siderbar, setsiderbar] = useState(false)
  const toggler = () => {setsiderbar(!siderbar)}
  return (
    <div className="navbar-container">
      <button className="menu-btn" onClick={toggler}>
         {siderbar  ? <GoSidebarCollapse /> : <GoSidebarExpand /> }</button>
     {siderbar && (
             <div className="sidebar-menu">       
       <ul className="menu-items">
          <SidebarItem title="Home"path="/"/>
          <SidebarItem title="About" path="/about"/>
          <SidebarItem title="Products"path="/products"/>
          <SidebarItem title="Cart" path="/cart"/>
          <Products />
             </ul>
             <button className="logout-btn" onClick={onClickLogout} > Logout</button>
           </div>)}
            </div> )}
export default Sidebar
