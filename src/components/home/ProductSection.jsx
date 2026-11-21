
import { useEffect, useRef } from 'react'
import ProductCard from '../product/productCard'
import products from '../../data/products'
import './ProductSection.css'

function ProductSection({
  activeCategory,
  setActiveCategory,
  searchQuery
}) {

  const productSectionRef = useRef(null)

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'All' ||
      product.category === activeCategory

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const categories = [
    { value: 'All', label: 'All Products' },
    { value: 'Men', label: 'Men' },
    { value: 'Women', label: 'Women' },
    { value: 'Premium', label: 'Premium' }
  ]

  useEffect(() => {
    const cards =
      productSectionRef.current?.querySelectorAll('.product-card')

    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15
      }
    )

    cards.forEach((card, index) => {
      card.style.setProperty('--delay', `${index * 100}ms`)
      observer.observe(card)
    })

    return () => observer.disconnect()

  }, [activeCategory, searchQuery])

  return (
    <section className="products-section" id="shop">

      {/* Section Heading */}
      <div className="products-heading">
        <p className="section-subtitle">
          OUR COLLECTION
        </p>

        <h2>Discover Our Products</h2>

        <p className="section-description">
          Explore our latest collection of timeless fashion.
        </p>
      </div>

      {/* Category Filter */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            className={
              activeCategory === category.value
                ? 'filter-btn active'
                : 'filter-btn'
            }
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid" ref={productSectionRef}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <h3>No Products Found</h3>
          <p>
            Sorry, no products match your search.
            Try another product name.
          </p>
        </div>
      )}

    </section>
  )
}

export default ProductSection
