import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './BreakFast.css';

const Lunch = () => {
  return (
    <div className="page-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {/* Title */}
            <Card className="my-5">
              <Card.Body>
                <h1 className="page-title">Energizing Lunches: Simple And Healthy</h1>
              </Card.Body>
            </Card>

            {/* Description */}
            <Card>
              <Card.Body>
                <p className="page-description">Balanced Lunches to Keep You Energized .</p>
                <ul>
                  <li>Rice and dal</li>
                  <li>Jivantii sabji and roti</li>
                  <li>Vegetable salad</li>
                  <li>Moong dal soup (yusha)</li>
                  <li>Khichadi with ghee</li>
                  <li>Buttermilk</li>
                  <li>Turmeric milk</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Lunch;
