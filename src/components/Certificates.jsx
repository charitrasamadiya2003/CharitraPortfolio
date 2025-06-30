import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Certificates.css';

const base = import.meta.env.BASE_URL;

const certificates = [
  {
    title: 'Frontend Web Development with ReactJS Certificate',
    issuer: 'grras',
    date: '11Sep, 2023',
    link: `${base}Certificates/FrontendwithReactcertificate.pdf`,
  },
  {
    title: 'Full Stack Web Development using MERN',
    issuer: 'grras',
    date: '10Feb, 2024',
    link: `${base}Certificates/FullStackcertificate.pdf`,
  },
  {
    title: 'Css Certificate (Basic)',
    issuer: 'HackerRank',
    date: '19Sep, 2024',
    link: `${base}Certificates/csscertificate.pdf`,
  },
  {
    title: 'MongoDB Complete Certification Series',
    issuer: 'MongoDB',
    date: '6Oct, 2024',
    link: `${base}Certificates/AllMongoDBcertificates.pdf`,
  },
  {
    title: 'ProblemSolving Certificate',
    issuer: 'HackerRank',
    date: '26June 2025',
    link: `${base}Certificates/ProblemSolvingcertificate.pdf`,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section text-white">
      <Container>
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Certifications
        </motion.h2>

        <Row className="justify-content-center">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="col-12 col-sm-6 col-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Card className="certificate-card">
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {cert.issuer}
                  </Card.Subtitle>
                  <Card.Text>
                    <small>Issued: {cert.date}</small>
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
