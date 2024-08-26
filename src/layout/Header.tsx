import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import login from '../img/login.png';
import ru from '../img/ru.png';
import en from '../img/en.png';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('ru');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    const menuItems = [
        { href: "/coin", text: "Монета" },
        { href: "/phis_users", text: "Физ. лицам" },
        { href: "/business", text: "Бизнесу" },
        { href: "/bank", text: "Банк" },
        { href: "/about", text: "О проекте" },
        { href: "/statistic", text: "Статистика" },
    ];

    return (
        <header className="py-4 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl bg-gradient-to-r from-[#0A0F22] to-[#1A1A2E] rounded-b-3xl shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-between w-full">
                <img src={logo} alt="ISNLogo" className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 hover:scale-105" />
                
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <nav className="hidden lg:flex space-x-6">
                    {menuItems.map((item) => (
                        <a key={item.href} href={item.href} className="text-white hover:text-[#CBFB5C] transition-colors duration-300 text-sm font-medium relative group">
                            {item.text}
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#CBFB5C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center space-x-4">
                    <div className="relative">
                        <select
                            value={selectedLanguage}
                            onChange={handleChange}
                            className="bg-transparent text-white text-sm border-none outline-none cursor-pointer appearance-none pr-6 hover:text-[#CBFB5C] transition-colors duration-300"
                        >
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                            <img src={selectedLanguage === 'ru' ? ru : en} alt={selectedLanguage.toUpperCase()} className="w-5 h-5" />
                        </div>
                    </div>
                    <button
                        className="bg-[#CBFB5C] text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-[#B8E251] transition-all duration-300 flex items-center transform hover:scale-105 shadow-md"
                        onClick={() => navigate('/login')}
                    >
                        <img src={login} alt="Иконка пользователя" className="w-4 h-4 mr-2" />
                        <span>Личный кабинет</span>
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden mt-4 space-y-2 bg-[#1A1A2E] rounded-2xl p-4 shadow-lg animate-fadeIn">
                    {menuItems.map((item) => (
                        <a key={item.href} href={item.href} className="block text-white hover:text-[#CBFB5C] transition-colors duration-300 py-2">
                            {item.text}
                        </a>
                    ))}
                    <div className="flex items-center justify-between mt-4">
                        <div className="relative">
                            <select
                                value={selectedLanguage}
                                onChange={handleChange}
                                className="bg-transparent text-white text-sm border-none outline-none cursor-pointer appearance-none pr-6 hover:text-[#CBFB5C] transition-colors duration-300"
                            >
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                <img src={selectedLanguage === 'ru' ? ru : en} alt={selectedLanguage.toUpperCase()} className="w-5 h-5" />
                            </div>
                        </div>
                        <button
                            className="bg-[#CBFB5C] text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-[#B8E251] transition-all duration-300 flex items-center transform hover:scale-105 shadow-md"
                            onClick={() => navigate('/login')}
                        >
                            <img src={login} alt="Иконка пользователя" className="w-4 h-4 mr-2" />
                            <span>Личный кабинет</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;