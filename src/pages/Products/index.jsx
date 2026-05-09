import Sidebar from '../../components/Sidebar'

import ProductCard from '../../components/ProductCard'

import './index.css'

const Products = () => {
  return (

    <div className="products-container">

      <Sidebar />

      <div className="products-content">

        <h1>Products</h1>

        <div className="products-list">

          <ProductCard
            title="Nike Shoes"
            price="2500"
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          />

          <ProductCard
            title="Watch"
            price="4000"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          />

        </div>

      </div>

    </div>

  )
}

export default Products