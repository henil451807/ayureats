import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaArrowUp , FaWeight } from 'react-icons/fa';
import './Signup.css'; 
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    height: '',
    weight: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (e.g., validation, API call)
    console.log('Form Data:', formData);
  };

  return (
    <Container className="signup-container" fluid="sm">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6}>
          <div className="signup-card p-4">
            <h2 className="text-center text-white mb-4">Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              {/* First Name */}
              <Form.Group controlId="firstName">
                <Form.Label className="text-white">First Name</Form.Label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              {/* Last Name */}
              <Form.Group controlId="lastName">
                <Form.Label className="text-white">Last Name</Form.Label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="email">
                <Form.Label className="text-white">Email</Form.Label>
                <div className="input-with-icon">
                  <FaEnvelope className="input-icon" />
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group controlId="confirmPassword">
                <Form.Label className="text-white">Confirm Password</Form.Label>
                <div className="input-with-icon">
                  <FaLock className="input-icon" />
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              {/* Age */}
              <Form.Group controlId="age">
                <Form.Label className="text-white">Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="18"
                  max="100"
                />
              </Form.Group>

              {/* Gender (Radio buttons) */}
              <Form.Group controlId="gender">
                <Form.Label className="text-white">Gender</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    className='text-white'
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                    className='text-white'
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Other"
                    name="gender"
                    value="other"
                    className='text-white'
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              {/* Height */}
              <Form.Group controlId="height">
                <Form.Label className="text-white">Height (in cm)</Form.Label>
                <div className="input-with-icon">
                  <FaArrowUp className="input-icon" />
                  <Form.Control
                    as="select"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  >
                    <option value="">Select height</option>
                    {[...Array(151).keys()].map((i) => (
                      <option key={i} value={i + 100}>
                        {i + 100} cm
                      </option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>

              {/* Weight */}
              <Form.Group controlId="weight">
                <Form.Label className="text-white">Weight (in kg)</Form.Label>
                <div className="input-with-icon">
                  <FaWeight className="input-icon" />
                  <Form.Control
                    type="number"
                    placeholder="Enter your weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <Button onClick={() => navigate('/mealplan')} variant="primary" type="submit" block>
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;

