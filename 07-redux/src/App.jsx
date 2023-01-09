import { Provider } from 'react-redux';
import { useState } from 'react';
import './App.css';
import TeoriaRedux from './components/TeoriaRedux';
import store from './store';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux</h1>
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
