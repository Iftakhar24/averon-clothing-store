
import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setMessage('Please enter your email address.')
      return
    }

    setMessage('Thank you for subscribing to AVERON!')
    setEmail('')
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <p className="newsletter-subtitle">STAY CONNECTED</p>

        <h2>Join the AVERON Community</h2>

        <p className="newsletter-description">
          Subscribe to receive updates about our latest collections,
          exclusive offers and fashion inspiration.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setMessage('')
            }}
            required
          />

          <button type="submit">SUBSCRIBE</button>
        </form>

        {message && (
          <p className="newsletter-message">{message}</p>
        )}
      </div>
    </section>
  )
}

export default Newsletter
