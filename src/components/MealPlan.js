import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './MealPlanForm.css'; // Ensure you have custom CSS for styles
import { useNavigate } from 'react-router-dom';

const MealPlanForm = () => {
  const [formData, setFormData] = useState({
    allergy: '',
    diet: 'veg', // Default value is 'veg'
    diseases: '',
  });

//   const [mealPlan, setMealPlan] = useState(null); // State to store the generated meal plan

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a meal plan based on current form data
    // setMealPlan(formData); // Set meal plan with current form data
  };

  return (
    <div className="meal-plan-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {/* Form */}
          <div className="meal-form-card p-4">
            <h2 className="text-center mb-4">Create Meal Plan</h2>
            <Form onSubmit={handleSubmit}>
              {/* Allergy Input */}
              <Form.Group controlId="allergy">
                <Form.Label>Allergy</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter allergies (if any)"
                  name="allergy"
                  value={formData.allergy}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Diet Type Radio Buttons */}
              <Form.Group controlId="diet" className="mb-3">
                <Form.Label className='p-2'>Diet Type</Form.Label>
                <Form.Check
                  inline
                  type="radio"
                  label="Veg"
                  name="diet"
                  value="veg"
                  checked={formData.diet === 'veg'}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Non-Veg"
                  name="diet"
                  value="non-veg"
                  checked={formData.diet === 'non-veg'}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Both"
                  name="diet"
                  value="both"
                  checked={formData.diet === 'both'}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Diseases Text Area */}
              <Form.Group controlId="diseases">
                <Form.Label>Diseases</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter any diseases (if any)"
                  name="diseases"
                  value={formData.diseases}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Submit Button */}
              <Button onClick={() => navigate('/mealcard')} variant="primary" type="submit" block>
                Create Meal Plan
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MealPlanForm;
