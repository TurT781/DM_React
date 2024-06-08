import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Launches from './Launches';
import LaunchDetails from './LaunchDetails';
import Contact from '../pages/ContactPage';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launchDetails" element={<LaunchDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;
