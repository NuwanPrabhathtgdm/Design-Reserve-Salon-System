import { useState } from 'react'
import './App.css'

function App() {
  const [selectedService, setSelectedService] = useState('')
  const [designStyle, setDesignStyle] = useState('modern')
  const [budget, setBudget] = useState('standard')
  const [appointmentDate, setAppointmentDate] = useState('')

  const services = [
    { id: 1, name: 'Hair Styling', price: 'Rs.1000-1500', icon: '💇' },
    { id: 2, name: 'Nail Art', price: 'Rs.3000-8000', icon: '💅' },
    { id: 3, name: 'Makeup', price: 'Rs.6000-12000', icon: '💄' },
    { id: 4, name: 'Spa Treatment', price: 'Rs.6000-12000', icon: '🧖' },
    { id: 5, name: 'Hair Color', price: 'Rs.3000-6000', icon: '🎨' },
    { id: 6, name: 'Facial Care', price: 'Rs.2500-6000', icon: '✨' }
  ]

 const designStyles = [
  { 
    id: 'modern', 
    name: 'Modern Chic', 
    desc: 'Sleek contemporary salon with clean lines and premium styling',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
  },
  { 
    id: 'vintage', 
    name: 'Vintage Glam', 
    desc: 'Classic retro-inspired salon decor and timeless beauty styles',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
  },
  { 
    id: 'minimalist', 
    name: 'Minimalist', 
    desc: 'Clean, simple salon aesthetics focusing on essential beauty services',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
  },
  { 
    id: 'luxury', 
    name: 'Luxury Spa', 
    desc: 'Premium salon experience with luxurious treatments and ambiance',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
  },
  { 
    id: 'natural', 
    name: 'Natural', 
    desc: 'Eco-friendly salon using organic products and natural beauty approaches',
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
  },
  { 
    id: 'industrial', 
    name: 'Industrial', 
    desc: 'Urban salon style with raw elements and edgy beauty concepts',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
  }
]

  const handleBooking = (e) => {
    e.preventDefault()
    if (selectedService && appointmentDate) {
      alert(`🎉 Booking Confirmed!\n\nService: ${selectedService}\nStyle: ${designStyle}\nBudget: ${budget}\nDate: ${new Date(appointmentDate).toLocaleString()}\n\nThank you for choosing Luxurious Look Salon!`)
    }
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <h1 className="logo">Luxurious Look</h1>
            <p className="tagline"><center>Where Beauty Meets Excellence</center></p>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#design">Designs</a>
            <a href="#booking">Booking</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-cta">
            <button className="cta-button">Book Now</button>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="hero-fullscreen">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Experience the Luxurious Look Salon</h1>
            <p>Premium styling with advanced design solutions for the modern beauty enthusiast</p>
            <div className="hero-buttons">
              <button className="cta-primary">Explore Designs</button>
              <button className="cta-secondary">View Gallery</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Design Styles</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-full">
        <div className="container">
          <div className="section-header">
            <h2>Our Premium Services</h2>
            <p>Discover our comprehensive range of beauty and wellness services</p>
          </div>
          <div className="services-grid-full">
            {services.map(service => (
              <div key={service.id} className="service-card-full">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p className="price">{service.price}</p>
                <p>Professional styling with premium international products</p>
                <div className="service-features">
                  <span>✓ Expert Stylists</span>
                  <span>✓ Premium Products</span>
                  <span>✓ Custom Solutions</span>
                </div>
                <button 
                  className="book-btn-full"
                  onClick={() => setSelectedService(service.name)}
                >
                  Select Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles Section */}
      <section id="design" className="design-styles-full">
        <div className="container">
          <div className="section-header">
            <h2>Design Styles & Themes</h2>
            <p>Choose from our carefully curated design concepts</p>
          </div>
          <div className="styles-grid-full">
            {designStyles.map(style => (
              <div 
                key={style.id} 
                className={`style-card-full ${designStyle === style.id ? 'active' : ''}`}
                onClick={() => setDesignStyle(style.id)}
              >
                <div 
                  className="style-image"
                  style={{ backgroundImage: `url(${style.image})` }}
                ></div>
                <div className="style-content">
                  <h3>{style.name}</h3>
                  <p>{style.desc}</p>
                  <span className="style-badge">Popular</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking-full">
        <div className="container">
          <div className="booking-container">
            <div className="booking-form-container">
              <div className="form-header">
                <h2>Book Your Appointment</h2>
                <p>Reserve your slot for a premium salon experience</p>
              </div>
              <form className="booking-form-full" onSubmit={handleBooking}>
                <div className="form-grid">
                  <div className="form-group-full">
                    <label>Select Service *</label>
                    <select 
                      value={selectedService} 
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                    >
                      <option value="">Choose a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.name}>
                          {service.name} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group-full">
                    <label>Design Style</label>
                    <select 
                      value={designStyle} 
                      onChange={(e) => setDesignStyle(e.target.value)}
                    >
                      {designStyles.map(style => (
                        <option key={style.id} value={style.id}>
                          {style.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group-full">
                    <label>Budget Range</label>
                    <div className="budget-options-full">
                      <label className="budget-option-full">
                        <input 
                          type="radio" 
                          value="standard" 
                          checked={budget === 'standard'}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                        <span className="budget-card">
                          <strong>Standard</strong>
                          <span>Rs.1000-2000</span>
                          <small>Basic package</small>
                        </span>
                      </label>
                      <label className="budget-option-full">
                        <input 
                          type="radio" 
                          value="premium" 
                          checked={budget === 'premium'}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                        <span className="budget-card">
                          <strong>Premium</strong>
                          <span>Rs.2000-10000</span>
                          <small>Most popular</small>
                        </span>
                      </label>
                      <label className="budget-option-full">
                        <input 
                          type="radio" 
                          value="luxury" 
                          checked={budget === 'luxury'}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                        <span className="budget-card">
                          <strong>Luxury</strong>
                          <span>Rs.10000+</span>
                          <small>VIP experience</small>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group-full">
                    <label>Appointment Date & Time *</label>
                    <input 
                      type="datetime-local" 
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn-full">
                  <span>Confirm Booking</span>
                  <span>→</span>
                </button>
              </form>
            </div>

            <div className="booking-info">
              <h3>Why Choose Luxurious Look Salon?</h3>
              <div className="benefits-list">
                <div className="benefit">
                  <span>⭐</span>
                  <div>
                    <strong>Expert Stylists</strong>
                    <p>Certified professionals with 10+ years experience</p>
                  </div>
                </div>
                <div className="benefit">
                  <span>💎</span>
                  <div>
                    <strong>Premium Products</strong>
                    <p>International brands and organic materials</p>
                  </div>
                </div>
                <div className="benefit">
                  <span>🎨</span>
                  <div>
                    <strong>Custom Designs</strong>
                    <p>Personalized styles tailored to your preferences</p>
                  </div>
                </div>
                <div className="benefit">
                  <span>⏰</span>
                  <div>
                    <strong>Flexible Timing</strong>
                    <p>Open 7 days a week, 9 AM - 9 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-full">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Luxurious Look Salon Designs</h3>
              <p>Transforming beauty experiences with premium designs and exceptional service since 2015.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#services">Services</a>
              <a href="#design">Designs</a>
              <a href="#booking">Booking</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📞 +94 (0)78 3843-082</p>
              <p>✉️ info@luxuriouslooksalon.com</p>
              <p>📍 Pothuwil Road, Monaragala, (Near Clock Tower)</p>
            </div>
            <div className="footer-section">
              <h4>Opening Hours</h4>
              <p>Monday - Friday: 9AM - 9PM</p>
              <p>Saturday - Sunday: 10AM - 8PM</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Luxurious Look Salon Designs. All rights reserved. | Premium Beauty Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App