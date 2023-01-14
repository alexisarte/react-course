import { Provider } from 'react-redux';
import './App.css';
import TeoriaRedux from './components/TeoriaRedux';
import store from './store';
import Contador from './components/Contador';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux</h1>
        <hr />
        <ShoppingCart />
        <Contador />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
