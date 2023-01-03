// import './App.css'
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <hr></hr>
      <ShoppingCart />
      <Contador />
      <hr></hr>
      <ContadorMejorado />
    </div>
  );
}

export default App;
