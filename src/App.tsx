import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginRegistrationPage from './components/LoginRegistrationPage';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import ErrorPage from './layout/ErrorPage';
import StatPage from './layout/StatPage';
import UserExistsWarningPage from './components/UserExistsWarningPage';
import './i18n';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginRegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statistic" element={<StatPage />} />
        <Route path="/coin" element={<ErrorPage />} />
        <Route path="/phis_users" element={<ErrorPage />} />
        <Route path="/business" element={<ErrorPage />} />
        <Route path="/bank" element={<ErrorPage />} />
        <Route path="/about" element={<ErrorPage />} />
        <Route path="/user-exists-warning" element={<UserExistsWarningPage />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;