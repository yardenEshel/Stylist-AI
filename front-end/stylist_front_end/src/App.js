
import Homepage from './pages/HomePage/HomePage';
import Footer from './components/Footer';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        {/* Path for the homepage */}
        <Route path="/" element={<Homepage />} />
        {/* Path for the onboarding page */}
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;