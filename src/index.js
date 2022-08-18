import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter() {
  const [mensaje, setMensaje] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Render');
  }, [counter]);

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button onClick={() => alert('El mensaje es: ' + mensaje)}>Save</button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incremetar</button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
