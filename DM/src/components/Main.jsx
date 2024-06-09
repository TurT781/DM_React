import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Contact from '../pages/ContactPage';
import ProductDetails from './ProductDetails';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;
