import Sidebar from '../../components/Sidebar'
import './index.css'
const About = () => {
  return (
    <div className="about-container">
      <Sidebar className="sidebarhome"/>
      <div className="about-content">
     <h1 className='about-heading '>ABOUT US</h1>
      <div className="offer-section">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNmJzyFS70SGx2hm6kcGGC67ayjLp4S0UCw&s"
    alt="shopping"  className="offer-image"  />
   <div className="offer-content">
    <h1 className="offer-title"> Mega Fashion Sale </h1>
    <p className="offer-description">
      Discover premium fashion collections
      with exclusive discounts up to 50%.
      Modern styles, elegant looks,
      and affordable pricing.</p>
    <button className="offer-button"> Explore Deals</button>
  </div>
</div>
<div className="offer-section reverse-section">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49VjldxB3H1ecYioJ53a9cxYGO_FLxSg1zQ&s"
    alt="electronics" className="offer-image" />
  <div className="offer-content">
    <h1 className="offer-title"> Smart Electronics Offers </h1>
    <p className="offer-description">
      Upgrade your lifestyle with
      premium gadgets, smart watches,
      headphones, and latest technology products.
    </p>
    <button className="offer-button"> View Products </button>
  </div>
</div></div>
    </div>
  )}
export default About