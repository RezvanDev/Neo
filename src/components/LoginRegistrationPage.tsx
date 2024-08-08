import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRegistrationPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleModeToggle = () => {
    setIsLoginMode(!isLoginMode);
    setEmail('');
    setPassword('');
    setAgreeTerms(false);
  };

  const isEmailValid = email.includes('@') && email.includes('.');
  const isPasswordValid = password.length >= 6;
  const canProceed = isEmailValid && (isLoginMode ? isPasswordValid : agreeTerms);

  return (
    <div className="min-h-screen bg-[#001131] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div 
        className="bg-[#18233A] rounded-3xl p-6 sm:p-8 w-full max-w-md relative overflow-hidden"
        style={{
          border: '1px solid #909090',
          boxShadow: '0 0 250px 0 #001C50',
          background: 'linear-gradient(135deg, #18233A 0%, #1E2B4A 100%)'
        }}
      >
        <div className="relative z-10">
          <div className="flex mb-6 bg-[#1C2340] rounded-full p-1 border border-[#909090]">
            <button
              className={`flex-1 py-2 text-center text-sm sm:text-base rounded-full ${isLoginMode ? 'bg-[#FBE318] text-black' : 'bg-transparent text-white'}`}
              onClick={() => setIsLoginMode(true)}
            >
              Вход
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm sm:text-base rounded-full ${!isLoginMode ? 'bg-[#FBE318] text-black' : 'bg-transparent text-white'}`}
              onClick={() => setIsLoginMode(false)}
            >
              Регистрация
            </button>
          </div>
          
          <h2 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">
            {isLoginMode ? 'Вход в личный кабинет' : 'Регистрация личного кабинета'}
          </h2>
          
          <div className="mb-4">
            <label className="block text-white text-sm sm:text-base mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-[#1C2340] text-white p-2 sm:p-3 rounded-lg text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите почту"
            />
          </div>
          
          {isLoginMode && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-white text-sm sm:text-base">Пароль</label>
                <a href="/forgot-password" className="text-[#FBE318] text-xs sm:text-sm">Забыли пароль?</a>
              </div>
              <input
                type="password"
                className="w-full bg-[#1C2340] text-white p-2 sm:p-3 rounded-lg text-sm sm:text-base"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          
          {!isLoginMode && (
            <div className="mb-4">
              <label className="flex items-start text-white text-xs sm:text-sm">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mr-2 mt-1"
                />
                <span>Создавая учетную запись, я соглашаюсь с Условиями использования и Политикой конфиденциальности.</span>
              </label>
            </div>
          )}
          
          <button
            className={`w-full py-2 sm:py-3 rounded-full mb-4 text-sm sm:text-base ${canProceed ? 'bg-[#FBE318] text-black' : 'bg-gray-500 text-white cursor-not-allowed'}`}
            disabled={!canProceed}
          >
            {isLoginMode ? 'Войти' : 'Далее'}
          </button>
          
          <button 
            className="w-full py-2 sm:py-3 rounded-full border border-white text-white text-sm sm:text-base"
            onClick={() => navigate('/')}
          >
            Отмена
          </button>
          
          <p className="text-white text-xs sm:text-sm mt-4 text-center">
            Если у Вас возникли проблемы обратитесь в службу поддержки клиентов support или напишите в LiveChat
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistrationPage;