import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can implement sending the message logic

    // Clear the input fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out to me.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button className="contact-button" onClick={handleFormSubmit}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
