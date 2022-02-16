import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Main from './pages/Main/Main';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
