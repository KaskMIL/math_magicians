import { Routes, Route } from 'react-router-dom';
import './app.css';
import CalculatorContainer from './components/CalcuContainer';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorContainer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
