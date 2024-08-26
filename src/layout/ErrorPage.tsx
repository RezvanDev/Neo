import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import coin from '../img/coin.gif';
import Header from './Header';
import Footer from './Footer';

const ErrorPage: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const launchDate = new Date('Dec 31, 2024 00:00:00').getTime();
      const now = new Date().getTime();
      const timeLeft = launchDate - now;

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
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <img src={coin} alt="Страница в разработке" className="max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px]" />
          <h2 className="text-4xl font-bold mb-6">До запуска платежной системы SIT осталось:</h2>
          <div className="flex space-x-6 text-2xl md:text-3xl lg:text-4xl">
            <div className="flex flex-col items-center">
              <span className="font-bold">{timeRemaining.days}</span>
              <span className="text-lg">Дней</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">{timeRemaining.hours}</span>
              <span className="text-lg">Часов</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">{timeRemaining.minutes}</span>
              <span className="text-lg">Минут</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">{timeRemaining.seconds}</span>
              <span className="text-lg">Секунд</span>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Страница в разработке</h1>
          <Link to="/" className="text-blue-400 hover:underline text-xl">Вернуться на главную страницу</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;