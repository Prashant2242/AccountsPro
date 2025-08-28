import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Accountant from './components/Accountant/Accountant.jsx';
import Client from './components/Client/Client.jsx';
import Header from './components/Header';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndCondition from './components/TermsAndCondition';
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Accountant />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/client" element={<Client />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

