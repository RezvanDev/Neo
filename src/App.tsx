// src/App.tsx
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Добавьте другие маршруты по мере необходимости */}
      </Routes>
    </Router>
  )
}

export default App