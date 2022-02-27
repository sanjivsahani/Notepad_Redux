import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './Componet/LogIn'
import Signup from './Componet/Singup'
import Data from './Componet/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
      {/* <Signup/> */}
      <Data/>
    </div>
  )
}

export default App
