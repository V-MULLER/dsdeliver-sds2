import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';


function App() {

  useEffect(() => {
    //chamada para a API para buscar produtos
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
