import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import coin from '../img/coin.gif';
import bg from '../img/bg1.png';
import dop_img from '../img/dop_img.png';
import img_block1 from '../img/img_block1.png';
import img_block2 from '../img/img_block2.png';
import img_block3 from '../img/img_block3.png';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [rates, setRates] = useState({
    usd: 0, eur: 0, gbp: 0, try_rate: 0, jpy: 0, rub: 0, cny: 0,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rates');
        const data = await response.json();
        setRates(data);
      } catch (error) {
        console.error('Ошибка при получении курсов:', error);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const spanWidth = textRef.current?.offsetWidth || 0;
    const animationDuration = (spanWidth / 100) * 10; 

    if (textRef.current) {
      textRef.current.style.animationDuration = `${animationDuration}s`;
    }
  }, [rates]);

  const contentSets = [
    [
      { img: img_block1, title: 'Кошелек', description: 'Ваши переводы и оплаты интегрированы в новейшую систему кошельков и зашифрованы. Безопасность и анонимность обеспечивает система smart contract на основе Sit номера пользователя.' },
      { img: img_block2, title: 'SIT Neobank', description: 'Neobank, построенный на основе криптографических технологий, обеспечивает наивысший уровень безопасности и надежности, функции которого находятся под надежным контролем алгоритма ИИ.' },
      { img: img_block3, title: 'Монета', description: 'Монета создана на базе блокчейна SIT , основным отличием которого является высокий уровень безопасности и стабильности, стоимость которой регулируется анализом состояния мирового рынка ' },
      { img: img_block1, title: 'Валюты в системе', description: 'Каждый пользователь в личном кабинете может самостоятельно выбрать валюту для конвертации и произвести обмен тем способом, который удобен ему, интегрированы как фиатные так и некоторые крипто валюты.'},
      { img: img_block2, title: 'P2P переводы', description: 'Транзакции между двумя пользователями осуществляются по идентификатору пользователя, что устранит попытки мошенничества и обмана и предусматривает возможность мгновенного перевода средств в любую точку мира без участия третьей стороны.'},
      { img: img_block3, title: 'Для бизнеса', description: 'Владелец каждой организации может зарегистрировать кабинет для бизнеса, с помощью которого проходит взаимодействие с другими компаниями, а также позволяет взаимодействовать с сотрудниками.'},
    ],
    [
      { img: img_block1, title: 'Мультикарта', description: 'Платежная карта проекта, валютой которой является монета Fehu, средства на которой конвертируются в нужную валюту, а затем отправляются получателю. Все переводы абсолютно конфиденциальны.'},
      { img: img_block2, title: 'SIT messenger', description: 'Приложение разработано для обеспечения конфиденциальности между пользователями, используя шифрование и блокчейн технологии мессенджер обеспечивает высокую безопасность сообщений.'},      
      { img: img_block3, title: 'Financial Investment Market', description: 'Центр финансовых операций, где клиенты могут инвестировать в различные активы. Поддерживает покупку и продажу ценных бумаг, акций и других финансовых инструментов.' },
      { img: img_block1, title: 'Cryptomessenger', description: 'Это приложение разработано для обеспечения конфиденциальных коммуникаций и обмена сообщениями между пользователями. Использует шифрование и работает в рамках нашей экосистемы.' },
      { img: img_block2, title: 'Все управления под ИИ', description: 'Искусственный интеллект помогает анализировать и управлять вашими финансовыми активами, обеспечивая оптимальные условия для роста и защиты капитала.' },
      { img: img_block3, title: 'Loan program', description: 'Программа кредитования включает в себя персонализированные условия, что снижает риск и увеличивает вероятность успеха бизнес-проектов.' },
    ]
  ];

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center text-white font-sans"
         style={{ backgroundImage: `linear-gradient(rgba(10, 15, 34, 0.9), rgba(10, 15, 34, 0.9)), url(${bg})`, backgroundSize: 'cover' }}>
      <Header />
      <main className="mx-auto mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between text-left w-full mb-16 lg:mb-24 px-[3%] md:px-[5%] lg:px-[8%]">
          <div className="flex flex-col items-start text-left mb-8 lg:mb-0 lg:w-1/2">
            <p className="text-[16px] tracking-[0.15em] text-[#778398] font-normal mb-4"
               style={{ fontFamily: 'Open Sans' }}>
              ФИНАНСОВАЯ СВОБОДА
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white block">SMART</span>
              <span className="text-[#CBFB5C] block">INTELLECTUAL</span>
              <span className="text-white block">TECHNOLOGY</span>
            </h1>
            <p className="text-[#A0AEC0] text-lg md:text-xl font-normal leading-7 mb-8"
               style={{ fontFamily: 'Open Sans', maxWidth: '500px' }}>
              Сохрани свои финансы с минимальной комиссией в онлайн-кошельке нового поколения
            </p>
            <div className="flex items-center justify-center bg-[#FFDA44] rounded-full shadow-md w-full max-w-xs h-14 bg-opacity-20">
              <button
                onClick={() => navigate('/login')}
                className="flex flex-row justify-center items-center gap-2.5 py-3 px-6
                           w-[90%] h-[80%] bg-[#CBFB5C] text-[#303030] font-semibold text-lg
                           rounded-full shadow-lg hover:bg-[#B8E251] transition-all duration-300 transform hover:scale-105"
                style={{
                  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                }}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <img src={coin} alt="Smart Intellectual Technology" className="max-w-[200px] md:max-w-[300px] lg:max-w-[400px] animate-pulse" />
          </div>
        </div>

        <div className="relative bg-[rgba(10,15,34,0.6)] rounded-[50px] shadow-[20px_20px_100px_rgba(0,0,0,0.4),_inset_-1px_-1px_0px_rgba(0,0,0,0.3),_inset_1px_1px_0px_rgba(255,255,255,0.1)] 
                        backdrop-blur-[50px] mx-[3%] md:mx-[5%] lg:mx-[8%] mt-64 lg:mt-16 mb-[-190px] lg:mb-[-100px] w-[85%] lg:w-[50%] h-[300px] md:h-[250px] lg:h-[200px]  p-8 z-20 transform -translate-y-1/2 lg:translate-y-0 ">
          <div className="flex items-center space-x-4 mb-4 ">
            <div className="w-8 h-8 flex items-center justify-center bg-[#CBFB5C] text-black font-bold rounded-full ">
              <span>1</span>
            </div>
            <p className="text-white text-[16px]">
              Денежные переводы, оплата товаров и услуг картой, обмен валют
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 relative">
            <div className="w-8 h-8 flex items-center justify-center bg-[#CBFB5C] text-black font-bold rounded-full">
              <span>2</span>
            </div>
            <p className="text-white text-[16px]">
              Платежи по всему миру без ограничений
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 relative">
            <div className="w-8 h-8 flex items-center justify-center bg-[#CBFB5C] text-black font-bold rounded-full">
              <span>3</span>
            </div>
            <p className="text-white text-[16px]">
              Пользователи — физические и юридические лица
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-50 mt-0 mr-0 md:mr-[3%] lg:mr-[8%] z-10 lg:z-0">
          <img src={dop_img} alt="Innovative Payment System" className="w-full max-w-[100px] lg:max-w-[150px]" />
        </div>

        <div className="relative bg-[#0A0F22CC] p-8 md:p-12 lg:p-16 rounded-[50px] shadow-2xl mt-24 mb-24" >
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-white">ИННОВАЦИОННАЯ</span>{' '}
              <span className="text-[#CBFB5C]">СИСТЕМА РАССЧЕТОВ И ПЛАТЕЖЕЙ</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentSets[0].map((item, index) => (
              <div key={index} className="bg-[#1A1A2E] p-8 rounded-3xl shadow-lg relative transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff26] p-4 rounded-full">
                  <img src={item.img} alt="Icon" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">{item.title}</h3>
                <p className="text-white mt-2 mb-12">{item.description}</p>
                <button className="text-[#CBFB5C] mt-4 absolute bottom-6 right-6 font-semibold text-lg hover:text-white transition-colors duration-300">
                  Изучить
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center text-center my-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              ПРОДУКТЫ И СЕРВИСЫ{' '}
              <span className="text-[#CBFB5C]">SIT</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentSets[1].map((item, index) => (
              <div key={index} className="bg-[#1A1A2E] p-8 rounded-3xl shadow-lg relative transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff26] p-4 rounded-full">
                  <img src={item.img} alt="Icon" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">{item.title}</h3>
                <p className="text-white mt-2 mb-12">{item.description}</p>
                <button className="text-[#CBFB5C] mt-4 absolute bottom-6 right-6 font-semibold text-lg hover:text-white transition-colors duration-300">
                  Изучить
                </button>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-24">
          <div className="container mx-auto p-4 bg-[rgba(255,218,68,0.1)]
               shadow-[10px_25px_50px_rgba(0,0,0,0.35),_inset_-1px_-1px_0px_rgba(0,0,0,0.3),_inset_1px_1px_0px_rgba(251,227,24,0.4)]
               backdrop-filter backdrop-blur-[10px] rounded-[60px] overflow-hidden relative">
            <p className="animate-marquee whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" ref={textRef}>
              <span className="inline-block">
                Fehu/USD {rates.usd} &nbsp; Fehu/EUR {rates.eur} &nbsp; Fehu/GBP {rates.gbp} &nbsp; Fehu/TRY {rates.try_rate} &nbsp; Fehu/JPY {rates.jpy} &nbsp; Fehu/RUB {rates.rub} &nbsp; Fehu/CNY {rates.cny}
              </span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;