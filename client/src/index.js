// Import necessary modules from React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS file for styling the application
import App from './App';  // Import the main App component
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider from the ThemeContext to manage the theme across the app

const root = ReactDOM.createRoot(document.getElementById('root'));
// Create a root element using ReactDOM and target the element with the id 'root'

// Render the application inside the root element
root.render(
  // Wrap the entire app in ThemeProvider to enable theme context throughout the app
  <ThemeProvider>
    {/* Use React.StrictMode to help identify potential problems in an application */}
    <React.StrictMode>
      {/* Render the main App component */}
      <App />
    </React.StrictMode>
  </ThemeProvider>
);


