import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import EmailVerification from './EmailVerification';
import CodeNotReceivedInfo from './CodeNotReceived';
import CreatePassword from './CreatePassword';
import UserExistsWarning from './UserExistsWarningPage';
import { registerUser, loginUser, verifyEmail, completeRegistration } from '../api/auth';
import logo from '../img/logo.png';

const LoginRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [showCodeNotReceivedInfo, setShowCodeNotReceivedInfo] = useState(false);
  const [showUserExistsWarning, setShowUserExistsWarning] = useState(false);
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Current language:', i18n.language);
  }, [i18n.language]);

  const handleModeToggle = () => {
    setIsLoginMode(!isLoginMode);
    setEmail('');
    setPassword('');
    setAgreeTerms(false);
    setError(null);
  };

  const isEmailValid = email.includes('@') && email.includes('.');
  const isPasswordValid = password.length >= 6;
  const canProceed = isEmailValid && (isLoginMode ? isPasswordValid : agreeTerms);

  const handleSubmit = async () => {
    setError(null);
    if (!isLoginMode) {
      try {
        await registerUser(email);
        setShowEmailVerification(true);
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === 'User with this email already exists') {
            navigate('/user-exists-warning');
          } else {
            setError(error.message || 'An error occurred during registration. Please try again.');
          }
        } else {
          setError('An unexpected error occurred. Please try again.');
        }
      }
    } else {
      try {
        const result = await loginUser(email, password);
        console.log('Login successful', result);
        navigate('/dashboard');
      } catch (error) {
        setError('Invalid email or password. Please try again.');
      }
    }
  };

  const handleVerifyEmail = async (code: string) => {
    try {
      await verifyEmail(email, code);
      setShowEmailVerification(false);
      setShowCreatePassword(true);
    } catch (error) {
      console.error('Email verification error:', error);
      if (error instanceof Error && error.message === 'Email already verified') {
        setShowEmailVerification(false);
        setShowCreatePassword(true);
      } else {
        setError('Invalid verification code. Please try again.');
      }
    }
  };

  const handleCreatePassword = async (newPassword: string) => {
    try {
      await completeRegistration(email, newPassword);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to complete registration. Please try again.');
    }
  };

  if (showEmailVerification) {
    return (
      <div className="min-h-screen bg-[#001131] flex items-center justify-center p-4">
        {showCodeNotReceivedInfo ? (
          <CodeNotReceivedInfo
            email={email}
            onClose={() => setShowCodeNotReceivedInfo(false)}
          />
        ) : (
          <EmailVerification 
            email={email}
            onVerify={handleVerifyEmail}
            onCancel={() => setShowEmailVerification(false)}
            onCodeNotReceived={() => setShowCodeNotReceivedInfo(true)}
          />
        )}
      </div>
    );
  }

  if (showCreatePassword) {
    return (
      <div className="min-h-screen bg-[#001131] flex items-center justify-center p-4">
        <CreatePassword 
          onSubmit={handleCreatePassword}
          onCancel={() => {
            setShowCreatePassword(false);
            setShowEmailVerification(true);
          }}
        />
      </div>
    );
  }

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
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt={t('loginRegistration.logo')} 
              className="w-32 h-auto cursor-pointer" 
              onClick={() => navigate('/')}
            />
          </div>
          <div className="flex mb-6 bg-[#1C2340] rounded-full p-1 border border-[#909090]">
            <button
              className={`flex-1 py-2 text-center text-sm sm:text-base rounded-full ${isLoginMode ? 'bg-[#CBFB5C] text-black' : 'bg-transparent text-white'}`}
              onClick={() => setIsLoginMode(true)}
            >
              {t('loginRegistration.login')}
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm sm:text-base rounded-full ${!isLoginMode ? 'bg-[#CBFB5C] text-black' : 'bg-transparent text-white'}`}
              onClick={() => setIsLoginMode(false)}
            >
              {t('loginRegistration.register')}
            </button>
          </div>

          <h2 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">
            {isLoginMode ? t('loginRegistration.loginTitle') : t('loginRegistration.registerTitle')}
          </h2>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-white text-sm sm:text-base mb-2">{t('loginRegistration.email')}</label>
            <input
              type="email"
              className="w-full bg-[#1C2340] text-white p-2 sm:p-3 rounded-lg text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('loginRegistration.enterEmail')}
            />
          </div>

          {isLoginMode && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-white text-sm sm:text-base">{t('loginRegistration.password')}</label>
              <a href="/forgot-password" className="text-[#CBFB5C] text-xs sm:text-sm">{t('loginRegistration.forgotPassword')}</a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-[#1C2340] text-white p-2 sm:p-3 rounded-lg text-sm sm:text-base pr-10"
                placeholder={t('loginRegistration.enterPassword')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg className="h-6 w-6 text-gray-300" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                    </path>
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-gray-300" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                    </path>
                  </svg>
                )}
              </button>
            </div>
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
                <span>{t('loginRegistration.agreeTerms')}</span>
              </label>
            </div>
          )}

          <button
            className={`w-full py-2 sm:py-3 rounded-full mb-4 text-sm sm:text-base ${canProceed ? 'bg-[#CBFB5C] text-black' : 'bg-gray-500 text-white cursor-not-allowed'}`}
            disabled={!canProceed}
            onClick={handleSubmit}
          >
            {isLoginMode ? t('loginRegistration.loginButton') : t('loginRegistration.nextButton')}
          </button>

          <button 
            className="w-full py-2 sm:py-3 rounded-full border border-white text-white text-sm sm:text-base"
            onClick={() => navigate('/')}
          >
            {t('loginRegistration.cancelButton')}
          </button>

          <p className="text-white text-xs sm:text-sm mt-4 text-center">
            {t('loginRegistration.supportInfo')} <span className="text-yellow-400">support</span> {t('loginRegistration.orLiveChat')}
          </p>
        </div>
      </div>

      {showUserExistsWarning && (
        <UserExistsWarning />
      )}
    </div>
  );
};

export default LoginRegistrationPage;