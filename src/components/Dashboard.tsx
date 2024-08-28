import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../layout/Header';
import coin from '../img/coin.gif';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2024-12-31T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001131] to-[#161616] text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">{t('presale.smart')}</span>
              <br />
              <span className="text-[#CBFB5C]">{t('presale.intellectual')}</span>
              <br />
              <span className="text-white">{t('presale.technology')}</span>
            </h1>
            <p className="text-xl mb-8">{t('presale.description')}</p>
            <button className="bg-[#CBFB5C] text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-[#B8E251] transition-colors duration-300">
              {t('presale.buyNow')}
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={coin} alt="SIT Coin" className="w-64 h-64 lg:w-96 lg:h-96 animate-spin-slow" />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('presale.countdownTitle')}</h2>
          <div className="flex justify-center space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-4xl lg:text-6xl font-bold mb-2">{value}</div>
                <div className="text-lg uppercase">{t(`presale.${unit}`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['security', 'scalability', 'efficiency'].map((feature) => (
            <div key={feature} className="bg-[#19263e] rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">{t(`presale.${feature}Title`)}</h3>
              <p>{t(`presale.${feature}Description`)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;