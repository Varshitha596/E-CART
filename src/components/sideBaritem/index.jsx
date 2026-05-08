import './index.css'

const SidebarItem = props => {

  const {title} = props

  return (
    <li className="sidebar-item">
      {title}
    </li>
  )
}

export default SidebarItem