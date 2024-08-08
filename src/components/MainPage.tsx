import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000000] via-[#0A0A1E] to-[#0A0A1E] text-white font-sans overflow-hidden">
      <div className="absolute inset-0 border border-[#161616] opacity-50 pointer-events-none"></div>
      <header className="relative w-full h-[100px]">
        <img
          src="/isn-logo.png"
          alt="ISN Logo"
          className="absolute left-[356px] top-[19px] w-[76.61px] h-[62.66px]"
        />
        <nav className="absolute top-[40px] left-[551.05px] flex space-x-12">
          <a href="#" className="text-white hover:text-yellow-400 transition-colors opacity-80 hover:opacity-100">Монета</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors opacity-80 hover:opacity-100">Физ. лицам</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors opacity-80 hover:opacity-100">Бизнесу</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors opacity-80 hover:opacity-100">Банк</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors opacity-80 hover:opacity-100">О проекте</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors opacity-80 hover:opacity-100">Статистика</a>
        </nav>
        <div className="absolute right-[280px] top-[23px] flex items-center">
          <div className="relative mr-4">
            <select className="appearance-none bg-transparent text-white text-sm border-none outline-none pr-6 opacity-80 cursor-pointer">
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <button
            className="relative bg-[#FBE318] text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-yellow-400 transition-colors"
            style={{
              width: '217px',
              height: '54px',
              border: '2.25328px solid #FCE524'
            }}
            onClick={() => navigate('/login')}
          >
            <span className="relative z-10 ml-8">Личный кабинет</span>
            <img
              src="/user-icon.png"
              alt="User Icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[35px] h-[35px]"
            />
          </button>
        </div>
      </header>
      <main className="container mx-auto mt-20 px-4">
        {/* Здесь можно добавить основное содержимое страницы */}
      </main>
    </div>
  );
};

export default MainPage;