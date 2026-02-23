import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:corim@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" onChange={handleChange} value={form.name} required />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} value={form.email} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} value={form.message} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
