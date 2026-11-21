
import { useState } from 'react'
import ProductSection from './components/home/ProductSection'
import Newsletter from './components/home/Newsletter'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/common/BackToTop'
import heroImage from './assets/averon-hero-fashion.png'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="app">
      <Navbar
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-subtitle">NEW COLLECTION 2026</p>

            <h1>
              Discover Your<br />Own Style
            </h1>

            <p className="hero-description">
              Explore timeless fashion and redefine
              your everyday look with AVERON.
            </p>

            <a href="#shop" className="hero-btn">
              SHOP NOW
            </a>
          </div>

          <div className="hero-image">
            <img src={heroImage} alt="AVERON Fashion Collection" />
          </div>
        </section>

        <ProductSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
        />
      </main>

      <Newsletter />

      <Footer />

      <BackToTop />
    </div>
  )
}

export default App
