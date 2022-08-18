import React from 'react';
import ReactDOM from 'react-dom/client';
import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));

const users = [
  {
    id: 1,
    name: 'Juan',
    image: 'https://robohash.org/user1',
  },
  {
    id: 2,
    name: 'Juancho',
    image: 'https://robohash.org/user2',
  },
  {
    id: 3,
    name: 'Juancinho',
    image: 'https://robohash.org/user3',
  }
];

root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} alt={user.name} />
        </div>
      );
    })}
  </>
);
