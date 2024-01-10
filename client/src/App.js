import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setMessage(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1> Captiosus Axons </h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
