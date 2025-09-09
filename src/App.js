import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Officers from './pages/Officers';
import Membership from './pages/Membership';
import Sponsors from './pages/Sponsors';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="officers" element={<Officers />} />
        <Route path="membership" element={<Membership />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;