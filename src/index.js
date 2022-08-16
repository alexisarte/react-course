import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
  function add(a, b) {
    return a + b;
  }

  return <h1>{add()}</h1>;
}

root.render(
  <>
    <Greeting />
  </>
);
