/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FormEvent, useState } from 'react';
import './App.scss';
import { Main } from './Pages/Main';
import { Favourites } from './Pages/Favourite';
import { Navigation } from './components/Navigation';
import { Modal } from './components/Modal';
import {
  Navigate,
  Route,
  Router,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="randomDish" element={<Main />} />
        <Route path="favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App
