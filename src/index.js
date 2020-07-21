import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes';

// Start mocks worker only in development mode
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

function App() {
  return <Routes />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
