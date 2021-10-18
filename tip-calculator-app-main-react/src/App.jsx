import { useState } from 'react'
import logo from './images/logo.svg'
import './App.css'
import Attribution from './components/Attribution'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">  
      <header>
        <h1 className="sr-only">SPLI<br/>TTER</h1>
        <img className="logo" src={logo} alt="splitter"/>
      </header>
      <main>
        <Form />
      </main>
      <footer>
        <Attribution />
      </footer>
    </div>
  )
}

export default App
