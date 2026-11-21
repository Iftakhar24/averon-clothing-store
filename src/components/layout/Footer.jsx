
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="about">

      <div className="footer-container">

        {/* Brand Information */}
        <div className="footer-column footer-brand">
          <h2>AVERON</h2>

          <p>
            Discover timeless fashion and elevate your
            everyday style with AVERON. We bring together
            elegance, comfort, and contemporary design to
            create a style that speaks with confidence.
            Dress beyond trends and express your
            individuality with every look.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#shop">Men</a></li>
            <li><a href="#shop">Women</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-column">
          <h3>Customer Support</h3>

          <ul>
            <li><a href="#about">Contact Us</a></li>
            <li><a href="#about">Shopping Information</a></li>
            <li><a href="#about">Returns & Exchanges</a></li>
            <li><a href="#about">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>

          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 AVERON. All Rights Reserved.</p>
        <p>Designed for Modern Fashion.</p>
      </div>

    </footer>
  )
}

export default Footer
