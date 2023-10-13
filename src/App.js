// src/App.js
import React from 'react';
import './App.css';
import UserTable from './UserTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to User Table App</h1>
      </header>
      <main>
        <UserTable />
      </main>
    </div>
  );
}

export default App;
