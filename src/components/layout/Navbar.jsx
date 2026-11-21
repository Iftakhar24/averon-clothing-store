
import './Navbar.css'

function Navbar({
  setActiveCategory,
  searchQuery,
  setSearchQuery
}) {
  return (
    <header className="navbar">

      {/* Brand Logo */}
      <div className="navbar-logo">
        <a href="#home" className="brand-link">
          <span className="brand-name">AVERON</span>
          <span className="brand-tagline">
            THE ART OF DRESSING
          </span>
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="navbar-menu">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>

        <button
          type="button"
          onClick={() => {
            setActiveCategory('Men')
            document.getElementById('shop')?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
        >
          Men
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveCategory('Women')
            document.getElementById('shop')?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
        >
          Women
        </button>

        <a href="#about">About</a>
      </nav>

      {/* Search Box */}
      <div className="navbar-actions">
        <input
          type="search"
          className="search-input"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

    </header>
  )
}

export default Navbar
