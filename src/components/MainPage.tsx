import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0A0A1E] to-[#0A0A1E] text-white font-sans">
      <header className="w-full py-4 px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <img
            src="/isn-logo.png"
            alt="ISN Logo"
            className="w-16 h-16 object-contain"
          />
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Монета</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Физ. лицам</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Бизнесу</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Банк</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">О проекте</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Статистика</a>
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <select className="bg-transparent text-white text-sm border-none outline-none cursor-pointer">
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <button
              className="bg-[#FBE318] text-black text-sm font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors flex items-center"
              onClick={() => navigate('/login')}
            >
              <img
                src="/user-icon.png"
                alt="User Icon"
                className="w-5 h-5 mr-2"
              />
              <span>Личный кабинет</span>
            </button>
          </div>
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A1E] p-4">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Монета</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Физ. лицам</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Бизнесу</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Банк</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">О проекте</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Статистика</a>
          </nav>
          <div className="mt-4 flex justify-between items-center">
            <select className="bg-transparent text-white text-sm border-none outline-none cursor-pointer">
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <button
              className="bg-[#FBE318] text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-yellow-400 transition-colors"
              onClick={() => navigate('/login')}
            >
              Личный кабинет
            </button>
          </div>
        </div>
      )}

      <main className="container mx-auto mt-20 px-4">
        {/* Здесь можно добавить основное содержимое страницы */}
      </main>
    </div>
  );
};

export default MainPage;