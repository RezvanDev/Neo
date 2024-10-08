import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CreatePasswordProps {
  onSubmit: (password: string) => void;
  onCancel: () => void;
}

const CreatePassword: React.FC<CreatePasswordProps> = ({ onSubmit, onCancel }) => {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValid, setIsValid] = useState({
    hasNumber: false,
    hasUpperCase: false,
    isLongEnough: false,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsValid({
      hasNumber: /\d/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      isLongEnough: password.length >= 8,
    });
  }, [password]);

  const handleSubmit = () => {
    setError(null);
    if (password === confirmPassword && Object.values(isValid).every(Boolean)) {
      onSubmit(password);
    } else if (password !== confirmPassword) {
      setError(t('createPassword.passwordMismatch'));
    }
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="bg-[#1C2340] rounded-3xl p-6 w-full max-w-md text-white shadow-lg"
         style={{
           border: '1px solid #909090',
           boxShadow: '0 0 250px 0 #001C50',
           background: 'linear-gradient(135deg, #18233A 0%, #1E2B4A 100%)'
         }}>
      <h2 className="text-2xl font-bold mb-6 text-center">{t('createPassword.title')}</h2>
      {error && (
        <div className="mb-4 text-red-500 text-sm">{error}</div>
      )}
      <div className="mb-4">
        <label className="block mb-2">{t('createPassword.password')}</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full bg-[#2C3454] p-3 pr-10 rounded-lg text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('createPassword.enterPassword')}
          />
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            onClick={() => togglePasswordVisibility('password')}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2">{t('createPassword.confirmPassword')}</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full bg-[#2C3454] p-3 pr-10 rounded-lg text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={t('createPassword.enterConfirmPassword')}
          />
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            onClick={() => togglePasswordVisibility('confirmPassword')}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      <div className="mb-4 text-sm bg-[#2C3454] p-3 rounded-lg">
        <p className={`flex items-center ${isValid.hasNumber ? 'text-green-400' : 'text-white'}`}>
          {isValid.hasNumber && <Check size={16} className="mr-2" />}
          {t('createPassword.requireNumber')}
        </p>
        <p className={`flex items-center ${isValid.isLongEnough ? 'text-green-400' : 'text-white'}`}>
          {isValid.isLongEnough && <Check size={16} className="mr-2" />}
          {t('createPassword.requireLength')}
        </p>
        <p className={`flex items-center ${isValid.hasUpperCase ? 'text-green-400' : 'text-white'}`}>
          {isValid.hasUpperCase && <Check size={16} className="mr-2" />}
          {t('createPassword.requireUpperCase')}
        </p>
      </div>
      <button
        className={`w-full py-3 rounded-full mb-3 ${
          password === confirmPassword && Object.values(isValid).every(Boolean)
            ? 'bg-[#CBFB5C] text-black'
            : 'bg-gray-500 text-white'
        } transition-colors duration-300`}
        onClick={handleSubmit}
        disabled={!(password === confirmPassword && Object.values(isValid).every(Boolean))}
      >
        {t('createPassword.nextButton')}
      </button>
      <button 
        className="w-full py-3 rounded-full border border-white text-white"
        onClick={onCancel}
      >
        {t('createPassword.cancelButton')}
      </button>
      <p className="text-xs text-center mt-4">
        {t('createPassword.supportInfo')} <span className="text-yellow-400">support</span> {t('createPassword.orLiveChat')}
      </p>
    </div>
  );
};

export default CreatePassword;