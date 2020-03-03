import React from 'react';
import './App.css';
import CPUUsage from './components/CPUUsage';

function App() {
  return (
    <div id="app" className="App">
      <header className="App-header">
        <CPUUsage />
      </header>
    </div>
  );
}

export default App;
