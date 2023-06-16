import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./views/home"
import Contact from "./views/contact"
import About from "./views/about"
import Navbar from "./components/Navbar"

// Constants
import { MENUS } from './constants/pages';

function App() {
  return (
    <div className="App">
      <Navbar menus={MENUS} />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/about" element={ <About/> } />
      </Routes>
    </div>
  )
}

export default App