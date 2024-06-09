import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Launches from '../components/Launches';
import LaunchDetails from '../components/LaunchDetails';

const LaunchPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path=":id" element={<LaunchDetails />} />
      </Routes>
    </div>
  );
};

export default LaunchPage;
