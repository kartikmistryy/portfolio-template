import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
