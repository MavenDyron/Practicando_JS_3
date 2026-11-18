import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [valor, setValor] = useState(0);

  useEffect(() => {
    document.title = `${valor}`;
  },[valor])

  return (
    <>
      <h1>Hola</h1>

      <p>{valor}</p>

      <button onClick={() => setValor(valor+1)}>Contador</button>
    </>
  )
}

export default App
