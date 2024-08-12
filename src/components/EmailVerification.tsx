import React, { useState } from 'react';

interface EmailVerificationProps {
  email: string;
  onVerify: (code: string) => void;
  onCancel: () => void;
  onCodeNotReceived: () => void;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ email, onVerify, onCancel, onCodeNotReceived }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleResendCode = () => {
    // Логика для повторной отправки кода
    setIsCodeSent(true);
  };

  return (
    <div className="bg-[#1C2340] rounded-3xl p-6 w-full max-w-md text-white shadow-lg"
         style={{
           border: '1px solid #909090',
           boxShadow: '0 0 250px 0 #001C50',
           background: 'linear-gradient(135deg, #18233A 0%, #1E2B4A 100%)'
         }}>
      <h2 className="text-2xl font-bold mb-4 text-center">Подтверждение Email</h2>
      <p className="text-center mb-6">
        Вы успешно зарегистрированы! Введите 6-значный код подтверждения, отправленный на вашу почту <span className="text-yellow-400">{email}</span>. Если письмо не приходит, проверьте папку спам и вкладку промоакции.
      </p>
      <div className="mb-4">
        <label className="block text-sm mb-2">Код подтверждения</label>
        <div className="relative">
          <input
            type="text"
            className="w-full bg-[#2C3454] p-3 pr-24 rounded-lg text-white"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="123456"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
            {isCodeSent ? (
              <>
                <span className="text-sm text-gray-400 mr-2">Код отправлен</span>
                <div className="relative group">
                  <svg className="w-5 h-5 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded shadow-lg right-0 mt-2 w-48">
                    Код был отправлен на вашу почту. Если вы не получили код, проверьте папку спам или запросите новый код.
                  </div>
                </div>
              </>
            ) : (
              <button
                className="text-yellow-400 text-sm hover:underline"
                onClick={handleResendCode}
              >
                Отправить код повторно
              </button>
            )}
          </div>
        </div>
      </div>
      <p className="text-center text-yellow-400 text-sm mb-4 cursor-pointer" onClick={onCodeNotReceived}>
        Не получили код?
      </p>
      <button
        className={`w-full py-3 rounded-full mb-3 ${verificationCode.length === 6 ? 'bg-yellow-400 text-black' : 'bg-gray-500 text-white'} transition-colors duration-300`}
        onClick={() => verificationCode.length === 6 && onVerify(verificationCode)}
        disabled={verificationCode.length !== 6}
      >
        Далее
      </button>
      <button
        className="w-full py-3 rounded-full border border-yellow-400 text-yellow-400"
        onClick={onCancel}
      >
        Отмена
      </button>
      <p className="text-xs text-center mt-4">
        Если у Вас возникли проблемы обратитесь в службу поддержки клиентов <span className="text-yellow-400">support</span> или напишите в LiveChat
      </p>
    </div>
  );
};

export default EmailVerification;