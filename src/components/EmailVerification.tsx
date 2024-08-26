import React, { useState } from 'react';
import { verifyEmail } from '../api/auth';

interface EmailVerificationProps {
  email: string;
  onVerify: (code: string) => void;
  onCancel: () => void;
  onCodeNotReceived: () => void;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ email, onVerify, onCancel, onCodeNotReceived }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async () => {
    console.log('Sending verification code:', verificationCode);
    try {
      await verifyEmail(email, verificationCode);
      onVerify(verificationCode);
    } catch (error) {
      console.error('Verification error:', error);
      setError('Неверный код подтверждения. Пожалуйста, попробуйте еще раз.');
    }
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
        Введите 6-значный код подтверждения, отправленный на вашу почту <span className="text-yellow-400">{email}</span>. Если письмо не приходит, проверьте папку спам и вкладку промоакции.
      </p>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
        </div>
      </div>
      <p className="text-center text-yellow-400 text-sm mb-4 cursor-pointer" onClick={onCodeNotReceived}>
        Не получили код?
      </p>
      <button
        className={`w-full py-3 rounded-full mb-3 ${verificationCode.length === 6 ? 'bg-yellow-400 text-black' : 'bg-gray-500 text-white'} transition-colors duration-300`}
        onClick={handleVerify}
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