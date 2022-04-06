import logo from './logo.svg'
import './App.css'
import Login from './Componet/LogIn'
import Signup from './Componet/Singup'
import Data from './Componet/Data'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/data/home" element={<Data />} />
          
          </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
