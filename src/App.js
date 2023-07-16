import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page and layout imports below
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import ReviewDetails from './Pages/ReviewDetails';
import Category from './Pages/Category';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/details/:id" element={<ReviewDetails />}/>
        <Route path="/category/:id" element={<Category />}/>
      </Routes>
    </div>
  );
}

export default App;
