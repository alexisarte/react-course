import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, UserCard } from './Greeting';
import Product, { navBar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';
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
