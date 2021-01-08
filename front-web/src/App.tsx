import React, { useEffect } from 'react';
import './App.css';
import Routes from './Routes';

function App() {
  
  useEffect(() => {
    //chamada para a API para buscar produtos
  }, []);

  return (
      <Routes />  
  );
}

export default App;
