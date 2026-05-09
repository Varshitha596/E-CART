import Sidebar from '../../components/Sidebar'

import ProductCard from '../../components/ProductCard'

import './index.css'

const Electronics = () => {
  return (

    <div className="electronics-container">

      <Sidebar />

      <div className="electronics-content">

        <h1 className="electronics-heading">
          Electronics Products
        </h1>

        <div className="electronics-products">

          <ProductCard
            title="Smart Watch"
            price="4000"
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          />

          <ProductCard
            title="Headphones"
            price="3000"
            imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          />

          <ProductCard
            title="Laptop"
            price="55000"
            imageUrl="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
          />

          <ProductCard
            title="Camera"
            price="32000"
            imageUrl="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          />

        </div>

      </div>

    </div>

  )
}

export default Electronics