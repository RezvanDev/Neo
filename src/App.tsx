// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import LoginRegistrationPage from './components/LoginRegistrationPage'
import ForgotPassword from './components/ForgotPassword'
import UserSettingsPage from './components/UserSettingsPage' // Импортируем новый компонент

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginRegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<UserSettingsPage />} /> {/* Добавляем новый маршрут */}
        {/* Добавьте другие маршруты по мере необходимости */}
      </Routes>
    </Router>
  )
}

export default App