import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки запроса на восстановление пароля
    console.log('Отправка запроса на восстановление пароля для:', email);
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
        <h2 className="text-2xl text-white mb-4">Забыли пароль?</h2>
        <p className="text-white mb-6">
          Для восстановления пароля, пожалуйста, введите email, который вы указывали при регистрации.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#1C2340] text-white p-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="reginasav@mail.ru"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full mb-4 bg-[#FBE318] text-black"
          >
            Выслать письмо
          </button>
          <button
            type="button"
            className="w-full py-3 rounded-full border border-white text-white"
            onClick={() => {/* Здесь логика возврата на страницу входа */}}
          >
            Отмена
          </button>
        </form>
        <p className="text-white text-sm mt-4 text-center">
          Если у Вас возникли проблемы обратитесь в службу поддержки клиентов <span className="text-[#FBE318]">support</span> или напишите в LiveChat
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;