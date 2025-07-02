import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import HelpRequestForm from "./components/HelpRequestForm";
import DonationPage from "./components/DonationPage";
import SuccessStories from "./components/SuccessStories";
import MapView from "./components/MapView";
import EmergencyAlerts from "./components/EmergencyAlerts";
import ProjectList from "./components/ProjectList";
import Blog from "./components/Blog";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-request" element={<HelpRequestForm />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/stories" element={<SuccessStories />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/alerts" element={<EmergencyAlerts />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
