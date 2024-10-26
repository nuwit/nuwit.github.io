import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Officers from './pages/Officers';
import Sponsors from './pages/Sponsors';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './styles/global.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;