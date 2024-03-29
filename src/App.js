import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route  exact path='/'  element={<Home/>}/>
          <Route  exact path='/services'  element={<Services/>}/>
          <Route  exact path='/products'  element={<Products/>}/>
          <Route  exact path='/sign-up'  element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
