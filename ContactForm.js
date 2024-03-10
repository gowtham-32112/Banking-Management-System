import React, { useState } from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to a server
    console.log('Contact Form Data:', contactFormData);
    // Reset the form after submission
    setContactFormData({ name: '', email: '', message: '' });
  };

  const formStyle = {
    width: '50%',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    marginTop: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <form style={formStyle} onSubmit={handleFormSubmit}>
      <h2>Contact Us</h2>
      <ContactPhoneIcon style={{ fontSize: 50, marginBottom: 20 }} />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={contactFormData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={contactFormData.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        value={contactFormData.message}
        onChange={handleInputChange}
        required
      ></textarea>

      <button
        type="submit"
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;