import {Link} from 'react-router-dom'

import './index.css'

const SidebarItem = props => {

  const {title, path} = props

  return (

    <li className="sidebar-item">

      <Link
        to={path}
        className="nav-link"
      >
        {title}
      </Link>

    </li>

  )
}

export default SidebarItem