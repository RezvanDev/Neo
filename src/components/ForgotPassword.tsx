import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { forgotPassword, resetPassword } from '../api/auth'; // Убедитесь, что путь к файлу API корректен

const ForgotPassword: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [stage, setStage] = useState('email'); // 'email', 'code', 'newPassword'
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await forgotPassword(email);
      setMessage(response.message);
      setStage('code');
    } catch (err) {
      setError(err.message || 'Не удалось отправить запрос на восстановление пароля');
    }
  };

  const handleSubmitCode = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setStage('newPassword');
  };

  const handleSubmitNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await resetPassword(email, code, newPassword);
      setMessage(response.message);
      setTimeout(() => navigate('/login'), 3000); // Перенаправление на страницу входа через 3 секунды
    } catch (err) {
      setError(err.message || 'Не удалось изменить пароль');
    }
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        
        {stage === 'email' && (
          <form onSubmit={handleSubmitEmail}>
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
          </form>
        )}

        {stage === 'code' && (
          <form onSubmit={handleSubmitCode}>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="code">{t('forgotPassword.code')}</label>
              <input
                type="text"
                id="code"
                className="w-full bg-[#1C2340] text-white p-3 rounded-lg"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={t('forgotPassword.codePlaceholder')}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full mb-4 bg-[#CBFB5C] text-black hover:bg-[#B8E251] transition-colors duration-300"
            >
              {t('forgotPassword.verifyCode')}
            </button>
          </form>
        )}

        {stage === 'newPassword' && (
          <form onSubmit={handleSubmitNewPassword}>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="newPassword">{t('forgotPassword.newPassword')}</label>
              <input
                type="password"
                id="newPassword"
                className="w-full bg-[#1C2340] text-white p-3 rounded-lg"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder={t('forgotPassword.newPasswordPlaceholder')}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full mb-4 bg-[#CBFB5C] text-black hover:bg-[#B8E251] transition-colors duration-300"
            >
              {t('forgotPassword.resetPassword')}
            </button>
          </form>
        )}

        <button
          type="button"
          className="w-full py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
          onClick={() => navigate('/login')}
        >
          {t('forgotPassword.cancelButton')}
        </button>

        <p className="text-white text-sm mt-4 text-center">
          {t('forgotPassword.supportInfo')} <span className="text-[#CBFB5C]">support</span> {t('forgotPassword.orLiveChat')}
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;