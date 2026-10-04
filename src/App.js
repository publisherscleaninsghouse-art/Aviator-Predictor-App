import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import PredictionEngine from './pages/PredictionEngine';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-shell">
      <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <div className="app-layout">
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <button
            className={`nav-button ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActivePage('dashboard')}
          >
            📊 Dashboard
          </button>
          <button
            className={`nav-button ${activePage === 'predictor' ? 'active' : ''}`}
            onClick={() => setActivePage('predictor')}
          >
            🎯 Prediction Engine
          </button>
        </aside>

        <main className="main-panel">
          {activePage === 'dashboard' ? <Dashboard /> : <PredictionEngine />}
        </main>
      </div>
    </div>
  );
}

export default App;
