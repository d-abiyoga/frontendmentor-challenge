import { useState } from 'react'
import logo from './images/logo.svg'
import './App.css'
import Attribution from './components/Attribution'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">  
      <main>
        <img className="logo" src={logo}/>
        <Card />
      </main>
      <Attribution />

    </div>
  )
}

export default App
