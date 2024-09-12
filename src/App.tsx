import React, { useState } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Workspace from '../components/Workspace';

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>('profile'); // Default page

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar setSelectedPage={setSelectedPage} />
        <Workspace selectedPage={selectedPage} />
      </div>
    </div>
  );
}

export default App;
