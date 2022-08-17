import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, UserCard } from './Greeting';
import Product, { navBar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';

const root = ReactDOM.createRoot(document.getElementById('root'));

const handleChange = e => {
  console.log(e.target.value + '...');
  console.log('Escribiendo en el input');
};

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Hola mundo" />

    <input id="hola" onDoubleClick={() => console.log('doble click')} />

    <form onSubmit={(e) => {
      e.preventDefault();
      alert('submit');
    }}>
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
  </>
);
