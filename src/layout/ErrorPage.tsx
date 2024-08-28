import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import coin from '../img/coin.gif';
import Header from './Header';
import Footer from './Footer';

const ErrorPage: React.FC = () => {
  const { t } = useTranslation();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDate = new Date('Dec 31, 2024 00:00:00').getTime();

    const countdown = () => {
      const now = new Date().getTime();
      const timeLeft = Math.max(launchDate - now, 0);

      setTimeRemaining({
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      });
    };

    const timer = setInterval(countdown, 1000);
    countdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#001131] text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="flex flex-col items-center">
          <img src={coin} alt={t('errorPage.altText')} className="max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-8">{t('errorPage.countdownTitle')}</h2>
          <div className="flex space-x-4 md:space-x-6 text-2xl md:text-3xl lg:text-4xl">
            {Object.entries(timeRemaining).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="font-bold">{value}</span>
                <span className="text-sm md:text-lg">{t(`errorPage.${unit}`)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{t('errorPage.pageUnderConstruction')}</h1>
          <Link to="/" className="text-[#CBFB5C] hover:underline text-xl transition-colors duration-300">
            {t('errorPage.returnToHome')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;