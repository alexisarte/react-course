import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Greeting() {
  return (
    <div>
      <h1>Este en un componente</h1>;
      <p>Hola mundo</p>
    </div>
  );
}
root.render(
  <div>
    <Greeting /> // Self closing tag
  </div>
);
