import { useState } from 'react'
import './App.css'
import TeoriaRedux from './components/TeoriaRedux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Redux</h1>
      <hr />
      <TeoriaRedux />
    </div>
  )
}

export default App
