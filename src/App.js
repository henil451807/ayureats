import React from 'react';
import BreakFast from './components/Lanch';
import LoginPage from './components/LoginPage';
import MealCards from './components/MealCard';
import MealPlanForm from './components/MealPlan';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LoginPage />} /> {/* The home page route */}
        <Route path="/signup" element={<SignUpPage />} /> {/* Sign Up page route */}
        <Route path="/mealplan" element={<MealPlanForm />} />
        <Route path="/mealcard" element={<MealCards />} />
        <Route path="/meal" element={<BreakFast  />} />
      </Routes>
    </Router>
  );
}

export default App;