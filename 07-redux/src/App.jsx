import { Provider } from 'react-redux';
import './App.css';
import TeoriaRedux from './components/TeoriaRedux';
import store from './store';
import Contador from './components/Contador';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux</h1>
        <Contador />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
