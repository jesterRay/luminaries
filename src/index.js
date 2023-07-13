import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/main.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Genre from './components/Genre';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Home></Home>
    <Genre></Genre>
    <Footer></Footer>
  </React.StrictMode>
);
