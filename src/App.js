
import { useState } from 'react';
import './App.css';

function App() {
  

  const [ rojo, setRojo ] = useState("");
  const [ amarillo, setAmarillo ] = useState("");
  const [ verde, setVerde ] = useState("");

  return (
    <div className="App">
      <header className="App-header">
     <h1>traffic light
     </h1>
     <div className="Semaforo">
       <div className={"rojo" + rojo } onClick={() => (
       setRojo("selected"),
       setAmarillo(""),
       setVerde("")
     
       )}></div>
         <div className={"amarillo" + amarillo } onClick={() => (
       setRojo(""),
       setAmarillo("selected"),
       setVerde("")
       )}></div>
        <div className={"verde" + verde } onClick={() => (
       setRojo(""),
       setAmarillo(""),
       setVerde("selected")
       )}></div>
     </div>
  <div className="poste" onClick={() => (
    setRojo(""),
    setAmarillo(""),
    setVerde("")
  )}></div>
      </header>
    
    </div>
  );
}

export default App;
