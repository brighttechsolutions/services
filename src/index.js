import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="logo">BrightTech IT Services</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className="container hero">
    <h1>Empowering Your Business with Technology</h1>
    <p>
      BrightTech Solutions offers reliable IT services to help your business grow, stay secure, and operate efficiently.
    </p>
    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="IT Services" style={{ maxWidth: '100%', borderRadius: 8, margin: '2rem 0' }} />
    <h2>Our Services</h2>
    <div className="services-list">
      <ServiceCard title="Managed IT Support" description="Proactive monitoring, troubleshooting, and support for your business IT needs." />
      <ServiceCard title="Cloud Solutions" description="Migration, setup, and management of cloud platforms like Azure, AWS, and Google Cloud." />
      <ServiceCard title="Cybersecurity" description="Multi-layered protection for your data, networks, and users." />
    </div>
  </div>
);

const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => (
  <div className="container">
    <h1>Our IT Services</h1>
    <div className="services-list">
      <ServiceCard title="Managed IT Support" description="24/7 helpdesk, remote and on-site support, device management." />
      <ServiceCard title="Cloud Solutions" description="Migration, setup, and ongoing management of cloud infrastructure." />
      <ServiceCard title="Cybersecurity" description="Network security, risk assessment, firewalls, endpoint protection." />
      <ServiceCard title="IT Consulting" description="Technology strategy, digital transformation, and project management." />
      <ServiceCard title="Backup & Disaster Recovery" description="Automated backups, business continuity, rapid recovery solutions." />
      <ServiceCard title="Network Solutions" description="Wi-Fi, VPNs, LAN/WAN, and secure connectivity for your office." />
    </div>
  </div>
);

const About = () => (
  <div className="container">
    <h1>About BrightTech Solutions</h1>
    <p>
      BrightTech Solutions has over 10 years of experience delivering IT services to small and medium businesses. Our team is passionate about helping organizations leverage technology to achieve their goals. 
    </p>
    <ul>
      <li>Experienced and certified IT professionals</li>
      <li>Customer-first approach</li>
      <li>Cutting-edge solutions, tailored to your needs</li>
      <li>Transparent pricing and communication</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="container">
    <h1>Contact Us</h1>
    <p>
      Interested in our services? Get in touch for a free consultation!
    </p>
    <form 
      action="mailto:info@brighttechsolutions.com" 
      method="POST"
      encType="text/plain"
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows={5} placeholder="How can we help you?" required />
      <button type="submit" style={{ background: '#0078d4', color: '#fff', border: 0, padding: '0.75rem', borderRadius: 4, cursor: 'pointer' }}>Send Message</button>
    </form>
    <div style={{ marginTop: '2rem', color: '#666' }}>
      Or email us directly: <a href="mailto:info@brighttechsolutions.com">info@brighttechsolutions.com</a>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
