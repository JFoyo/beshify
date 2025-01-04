import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
);