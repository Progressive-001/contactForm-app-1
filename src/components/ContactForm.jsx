import { useState } from 'react';
import '../style.css';  // Import your CSS file


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Contact Form Data:');
    console.log('Name: ' + formData.name);
    console.log('Email: ' + formData.email);
    console.log('Phone: ' + formData.phone);
  };

  return (
    <div className="contact">
      <h1>Contact Form</h1>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
