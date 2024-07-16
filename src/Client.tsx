import React, { ChangeEvent, FormEvent, useState } from 'react';
import './ClientPage.css'; // You'll need to create this CSS file for styling

const ClientPage = () => {
  const [showApplications, setShowApplications] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const toggleApplications = () => {
    setShowApplications(!showApplications);
  };

  return (
    <div className="client-page">
      <div className="header">
        <div className="menu-icon">☰</div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <h1 className="title">Client</h1>

      <div className="button-group">
        <button className="purple-button">New application</button>
        <button className="purple-button" onClick={toggleApplications}>Resume application</button>
        <button className="purple-button">View applications</button>
        <button className="gray-button">Accepted Client</button>
      </div>

      {showApplications && (
        <div className="applications-popup">
          <ul>
            <li>01CLA-p0807</li>
            <li>02CLA-p0812</li>
            <li>03CLA-p0818</li>
            <li>04CLA-p0901</li>
          </ul>
        </div>
      )}

      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have a question about our services, need assistance with a booking, or just want to share your feedback, our team is here to help. Please fill out the form below, and we'll get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message..." onChange={handleChange} required />
          <button type="submit" className="purple-button">Submit</button>
        </form>
        <div className="contact-info">
          <p>Call: +91 80785</p>
          <p>Email: info@example.com</p>
          <p>Address: Lorem ipsum dolor sit</p>
          <div className="social-icons">
            {/* Add social media icons here */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;