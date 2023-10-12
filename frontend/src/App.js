
import './App.css';
import { useState } from 'react';

function App() {

  const [result,setResult] = useState("Get People From Spring!");

  function click(){
    fetch('/api/people')
    .then(response=>response.json())
    .then(json=>setResult("Received From Spring: " + JSON.stringify(json)))
  }

  return (
    <div>
      <button onClick={click}>Click me!</button>
      <p style={{color:"orangered"}}>{result}</p>
    </div>
  );
}

export default App;
