import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      link: 'mailto:gudinaadana@gmail.com',
      display: 'gudinaadana@gmail.com'
    },
    {
      name: 'Telegram',
      icon: '✈️',
      link: 'https://t.me/GudinaAdana',
      display: '@GudinaAdana'
    },
    {
      name: 'Phone',
      icon: '📱',
      link: 'tel:+251919326458',
      display: '+251 919 326 458'
    },
    {
      name: 'GitHub',
      icon: '💻',
      link: 'https://github.com/tiktok',
      display: 'github.com/tiktok'
    },
    {
      name: 'Facebook',
      icon: '👤',
      link: 'https://www.facebook.com/gudina.adana',
      display: 'gudina.adana'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      link: 'https://vm.tiktok.com/ZS9JXv3k2tddQ-b9GGH/',
      display: 'TikTok Profile'
    }
  ];

  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <p className="contact-location">📍 Ethiopia, Oromia, Robe</p>
      
      <div className="contact-container">
        <div className="social-links">
          <h3>Contact With Me</h3>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card"
              >
                <span className="social-icon">{social.icon}</span>
                <div className="social-info">
                  <strong>{social.name}</strong>
                  <span>{social.display}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
