import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import AnalyzePage from './Components/AnalyzerPage/AnalyzePage'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Signup from './Components/Login/Signup'
import Login from './Components/Login/Login'
import Courses from './Components/Courses/Courses'
import './App.css'

function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/analyzer" element={<AnalyzePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
