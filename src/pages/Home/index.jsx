import Sidebar from '../../components/Sidebar'

import './index.css'

const Home = () => {
  return (

    <div className="home-container">

      <Sidebar />

      <div className="home-content">

        <h1 className="home-heading">
          Welcome to E-Store
        </h1>

        <p className="home-description">

          Discover amazing fashion,
          electronics
          products.....!!
          ONLY IF U DONT HAVE WORK..

        </p>

        <button className="shop-btn">
          Shop Now
        </button>

      </div>

    </div>

  )
}

export default Home