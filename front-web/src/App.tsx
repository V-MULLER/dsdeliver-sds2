import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Footer from './Footer';

function App() {
  
  useEffect(() => {
    //chamada para a API para buscar produtos
  }, []);

  return (
    <>
      <Navbar />
      <Home />
        
    </>
  );
}

export default App;
