import Sidebar from '../../components/Sidebar'

import ProductCard from '../../components/ProductCard'

import './index.css'

const Fashion = () => {
  return (

    <div className="fashion-container">

      <Sidebar />

      <div className="fashion-content">

        <h1 className="fashion-heading">
          Fashion Products
        </h1>

        <div className="fashion-products">

          <ProductCard
            title="Nike Shoes"
            price="2500"
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          />

          <ProductCard
            title="Leather Jacket"
            price="4500"
            imageUrl="https://images.unsplash.com/photo-1523398002811-999ca8dec234"
          />

          <ProductCard
            title="Backpack"
            price="1800"
            imageUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          />

          <ProductCard
            title="Fashion T-Shirt"
            price="1200"
            imageUrl="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
          />

        </div>

      </div>

    </div>

  )
}

export default Fashion