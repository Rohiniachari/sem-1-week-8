import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherPage from './WeatherPage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weather/:city" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
