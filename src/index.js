import React from 'react';
import ReactDOM from 'react-dom/client';
import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));

const handleChange = e => {
  console.log(e.target.value + '...');
  console.log('Escribiendo en el input');
};

root.render(
  <>
    <Posts />
  </>
);
