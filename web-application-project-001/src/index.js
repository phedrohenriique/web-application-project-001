import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigator } from './components'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Navigator />
      <BrowserRouter>
      <Routes>
        <Route path='/componentTest' element={<h1>Component</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>
);
