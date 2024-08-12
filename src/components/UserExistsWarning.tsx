import React from 'react';

interface UserExistsWarningProps {
  onClose: () => void;
  onResetPassword: () => void;
}

const UserExistsWarning: React.FC<UserExistsWarningProps> = ({ onClose, onResetPassword }) => {
  return (
    <div className="fixed inset-0 bg-[#18233A] bg-opacity-100 flex items-center justify-center p-4">
      <div className="bg-[#1C2340] rounded-3xl overflow-hidden max-w-md w-full">
        <div className="bg-[#FF6B6B] p-4 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-4 text-white">Такой пользователь уже существует</h2>
          <p className="text-gray-300 mb-6">
            Если вы не помните пароль, восстановите его через «Забыли пароль?» или перейдите сразу на восстановление.
          </p>
          <button
            onClick={onResetPassword}
            className="w-full bg-[#FBE318] text-black font-bold py-2 px-4 rounded-full mb-3 hover:bg-yellow-400 transition-colors"
          >
            Восстановить пароль
          </button>
          <button
            onClick={onClose}
            className="w-full bg-transparent text-white font-bold py-2 px-4 rounded-full border border-white hover:bg-white hover:text-black transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserExistsWarning;