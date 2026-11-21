import './productCard.css'
function ProductCard({ image, name, category, price }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={name} />

        <div className="product-overlay">
          <span>VIEW COLLECTION</span>
        </div>
      </div>

      <div className="product-info">
        <p className="product-category">
          {category.toUpperCase()}
        </p>

        <h3 className="product-name">{name}</h3>

        <p className="product-price">${price}</p>
      </div>

    </div>
  )
}

export default ProductCard
