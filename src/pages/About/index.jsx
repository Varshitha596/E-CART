import Sidebar from '../../components/Sidebar'

import './index.css'

const About = () => {
  return (

    <div className="about-container">

      <Sidebar />

      <div className="about-content">

        <h1 className="about-heading">
          About Us
        </h1>

        <img
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc"
          alt="about"
          className="about-image"
        />

        <p className="about-description">

          Welcome to Cabot Webstersoo.
          We provide high-quality fashion,
          electronics, daily wear products,
          and many more amazing collections
          at affordable prices.

        </p>

        <h2 className="mission-heading">
          Our Mission
        </h2>

        <p className="mission-description">

          Our mission is to create
          a simple and modern shopping
          experience for everyone.

        </p>

        <button className="explore-btn">
          Explore Products
        </button>

      </div>

    </div>

  )
}

export default About