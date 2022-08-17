import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, UserCard } from './Greeting';
import Product, { navBar } from './Product';
import { Button } from './Button';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Button text="Click me" name="John" />
    <Button text="Pay" />
    <Button text='' />
    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 35, 254.3]}
      address={{ street: '123 Main St', city: 'Anytown', state: 'CA' }}
      greet={function () {
        alert('Hello');
      }}
    />

    <UserCard
      name="John Doe"
      amount={1000}
      married={false}
      points={[99, 35, 254.3]}
      address={{
        street: '123 Main St',
        city: 'Anytown',
      }}
    /> */}
  </>
);
