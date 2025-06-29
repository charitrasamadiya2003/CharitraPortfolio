import React, { useState } from 'react';
import './Contact.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="lux-contact-section">
      <Container>
        {/* Title */}
        <motion.h2
          className="fw-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Let’s Connect
        </motion.h2>

        {/* Success Alert */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Alert variant="success" className="text-center mt-4">
              Your message has been sent successfully!
            </Alert>
          </motion.div>
        )}

        {/* Form */}
        <motion.div
          className="mt-5 mx-auto contact-form-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your thoughts..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="golden" type="submit" className="lux-btn">
              Send Message
            </Button>
          </Form>
        </motion.div>

        {/* Email Display */}
        <motion.p
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <strong>Email me directly at: </strong>
          <a href="mailto:charitrasamadiya@gmail.com">
            charitrasamadiya@gmail.com
          </a>
        </motion.p>
      </Container>
    </section>
  );
};

export default Contact;
