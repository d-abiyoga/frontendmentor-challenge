import { useState } from 'react'
import logo from './images/logo.svg'
import './App.css'
import Attribution from './components/Attribution'
import Form from './components/Form'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">  
      <main>
        <img className="logo" src={logo}/>
        <Form />
      </main>
      <Attribution />

    </div>
  )
}

export default App
