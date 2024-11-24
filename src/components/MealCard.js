import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaCoffee, FaHamburger, FaUtensils } from 'react-icons/fa'; // Icons for Breakfast, Lunch, and Dinner
import './MealCard.css';
import { useNavigate } from 'react-router-dom';

const MealCards = () => {
    const navigate = useNavigate();
  return (
    <div className="meal-cards-container">
      <Col className="g-4 mealmaincard">
        <Col md={4} sm={12} >
          <Card className="meal-card">
            <Card.Body className="d-flex align-items-center">
              <div className="meal-icon">
                <FaCoffee size={40} color="#FF8C00" />
              </div>
              <div className="meal-text ms-3">
                <Card.Title>Breakfast</Card.Title>
                <Card.Text>
                  Start your day with a healthy breakfast to energize your body and mind.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12} onClick={() => navigate('/meal')}>
          <Card className="meal-card">
            <Card.Body className="d-flex align-items-center">
              <div className="meal-icon">
                <FaHamburger size={40} color="#32CD32" />
              </div>
              <div className="meal-text ms-3">
                <Card.Title>Lunch</Card.Title>
                <Card.Text>
                  Refuel your body with a nutritious lunch to stay productive throughout the day.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12}>
          <Card className="meal-card">
            <Card.Body className="d-flex align-items-center">
              <div className="meal-icon">
                <FaUtensils size={40} color="#DC143C" />
              </div>
              <div className="meal-text ms-3">
                <Card.Title>Dinner</Card.Title>
                <Card.Text>
                  Enjoy a light and healthy dinner for a peaceful night’s sleep.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Col>
    </div>
  );
};

export default MealCards;