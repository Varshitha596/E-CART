import Sidebar from '../../components/Sidebar'
import { AiFillDingtalkCircle } from "react-icons/ai";

import './index.css'

const Home = () => {
  return (

    <div className="home-container">

      <Sidebar />

      <div className="home-content">
   <AiFillDingtalkCircle className='logo'/>
        <h1 className="home-heading">
          Welcome to E-Store
        </h1>

        <p className="home-description">

          Discover amazing fashion,
          electronics <br/>
        <span className='span'>ONLY IF U DONT HAVE WORK..</span>  

        </p>

        <button className="shop-btn">
          Shop Now
        </button>

      </div>

    </div>

  )
}

export default Home