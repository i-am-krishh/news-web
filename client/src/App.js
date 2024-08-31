// Import necessary components and modules from 'react-router-dom' for routing
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import custom components and pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

// Import custom hook to access the current theme
import { useTheme } from "./context/ThemeContext";

// Import global CSS file for styling the application
import './App.css'

// Import FetchData component for handling data fetching based on categories
import FetchData from './components/FetchData';

function App() {
  // Use the custom hook to retrieve the current theme from ThemeContext
  const [theme] = useTheme();

  return (
    // Apply the current theme as an id to the root div
    <div id={theme}>
      <div className="App">
        {/* Wrap the application with Router to enable routing */}
        <Router>
          {/* Render the Navbar component */}
          <Navbar />
          
          {/* Define the routes for the application */}
          <Routes>
            {/* Redirect the root path to the /home route */}
            <Route path="/" element={<Navigate to="/home" />} />
            {/* Define routes for each page and category */}
            <Route path="/home" element={<Home />} />
            <Route path="/general" element={<FetchData cat="general" />} />
            <Route path="/business" element={<FetchData cat="business" />} />
            <Route path="/sport" element={<FetchData cat="sport" />} />
            <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
            <Route path="/technology" element={<FetchData cat="technology" />} />
            <Route path="/science" element={<FetchData cat="science" />} />
            <Route path="/health" element={<FetchData cat="health" />} />
            <Route path="/politics" element={<FetchData cat="politics" />} />
          </Routes>

          {/* Render the Footer component */}
          <Footer />
        </Router>
        
        {/* Card component can be included here if needed */}
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default App;
