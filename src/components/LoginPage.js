import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import './Loginpage.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
    <Container className="login-container" fluid="sm">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={6} lg={4}>
          <div className="login-card p-4">
            <h2 className="text-center text-white mb-4">Sign In</h2>
            <Form onSubmit={handleSubmit}>
              {/* Email */}
              <Form.Group controlId="email">
                <Form.Label className="text-white">Email address</Form.Label>
                <div className="input-with-icon">
                  <FaEnvelope className="input-icon" />
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="password">
                <Form.Label className="text-white">Password</Form.Label>
                <div className="input-with-icon">
                  <FaLock className="input-icon" />
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Login
              </Button>
            </Form>

            <div className="text-center mt-3">
              <Row className="justify-content-between">
                <Col xs="auto" className="text-white">
                  <p className="mb-0">Can't register?</p>
                </Col>
                <Col xs="auto">
                  <p className="text-muted mb-0">
                    <Link to="/signup" className="link-signup text-white">Sign Up</Link>
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
