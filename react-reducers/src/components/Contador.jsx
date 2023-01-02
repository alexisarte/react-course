import { useState, useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Contador = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const sumar = () => setCount(count + 1);
  const sumar = () => dispatch({ type: 'INCREMENT' });

  // const restar = () => setCount(count - 1);
  const restar = () => dispatch({ type: 'DECREMENT' });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contador Reducer</h1>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Contador;
