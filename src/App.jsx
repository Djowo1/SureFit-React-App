// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AUPage from './AUPage';
import SureFitPage from './SureFitPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AUPage />} />  
         <Route path="/surefit" element={<SureFitPage />} />        
      </Routes>
    </Router>
  );
}

export default App;
