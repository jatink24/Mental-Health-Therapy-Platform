import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import FeaturesSection from './Components/FeaturesSection'
import AboutPage from './Pages/About';
import Home from './Pages/Home';
import ContactPage from './Pages/Contactpage';
import LoginPage from './Pages/LoginPage';
import CreateAccount from './Pages/CreateAccount';
import SlotBooking from './Components/SlotBooking';
import Dashboard from './Pages/Dashboard';
import DoctorsList from './Pages/DoctorsList';
import DoctorDashboard from './Pages/DoctorDashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/log-in" element={<LoginPage/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
        <Route path="/slot-booking" element={<SlotBooking/>}/>
        <Route path="/user-dashboard" element={<Dashboard/>}/>
        <Route path="/doctors" element={<DoctorsList/>}/>
        <Route path="/doctor-dashboard" element={<DoctorDashboard/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App
