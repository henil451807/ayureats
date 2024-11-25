import React from 'react';
import Lunch from './components/Lunch';
import LoginPage from './components/LoginPage';
import MealCards from './components/MealCard';
import MealPlanForm from './components/MealPlan';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes
        future={{
          v7_startTransition: true,  // Enable non-blocking transitions for route state updates
          v7_relativeSplatPath: true // Opt into the new behavior for splat route resolution
        }}
      >
        {/* Define your routes here */}
        <Route path="/ayureats" element={<LoginPage />} /> {/* The home page route */}
        <Route path="/signup" element={<SignUpPage />} /> {/* Sign Up page route */}
        <Route path="/mealplan" element={<MealPlanForm />} />
        <Route path="/mealcard" element={<MealCards />} />
        <Route path="/meal" element={<Lunch />} />
      </Routes>
    </Router>
  );
}

export default App;
