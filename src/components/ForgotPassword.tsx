import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправка запроса на восстановление пароля для:', email);
    // Здесь должна быть логика отправки запроса на сервер
  };

  return (
    <div className="min-h-screen bg-[#001131] flex items-center justify-center p-4">
      <div
        className="bg-[#18233A] rounded-3xl p-8 w-full max-w-md relative overflow-hidden"
        style={{
          border: '1px solid #909090',
          boxShadow: '0 0 250px 0 #001C50',
          background: 'linear-gradient(135deg, #18233A 0%, #1E2B4A 100%)'
        }}
      >
        <h2 className="text-2xl text-white mb-4">{t('forgotPassword.title')}</h2>
        <p className="text-white mb-6">
          {t('forgotPassword.instruction')}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">{t('forgotPassword.email')}</label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#1C2340] text-white p-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('forgotPassword.emailPlaceholder')}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full mb-4 bg-[#CBFB5C] text-black hover:bg-[#B8E251] transition-colors duration-300"
          >
            {t('forgotPassword.sendButton')}
          </button>
          <button
            type="button"
            className="w-full py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            onClick={() => navigate('/login')}
          >
            {t('forgotPassword.cancelButton')}
          </button>
        </form>
        <p className="text-white text-sm mt-4 text-center">
          {t('forgotPassword.supportInfo')} <span className="text-[#CBFB5C]">support</span> {t('forgotPassword.orLiveChat')}
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;