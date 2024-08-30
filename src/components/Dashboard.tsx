import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#001131] to-[#161616] text-white">
      {/* Боковая панель */}
      <aside className="w-1/5 p-4 flex flex-col">
        {/* Логотип */}
        <img src="/path-to-logo.svg" alt="Logo" className="w-16 h-16 mb-8" />

        {/* Аккаунты */}
        <div className="space-y-4 mb-8">
          {[
            { title: 'Инвестиционный счет', amount: '*** *** **', account: 'SIT000', currency: 'FEHU' },
            { title: 'Лицевой счет', amount: '176 596,96', account: 'SIT000', currency: 'FEHU' },
            { title: 'Платежная карта', amount: '*** *** **', account: '5555', currency: 'FEHU' },
          ].map((item, index) => (
            <div key={index} className="bg-[#19263e] rounded-xl p-4 border border-[#CBFC01]">
              <div className="flex justify-between items-center">
                <span className="text-white">USD</span>
                <span className="text-white">{item.amount}</span>
              </div>
              <div className="text-gray-400 text-sm mt-2">{item.title}</div>
              <div className="flex justify-between mt-2">
                <span className="bg-[#2C3B61] text-white text-xs px-2 py-1 rounded">{item.account}</span>
                <span className="border border-gray-600 text-white text-xs px-2 py-1 rounded-full">{item.currency} ******</span>
              </div>
            </div>
          ))}
        </div>

        {/* Навигация */}
        <nav className="flex-grow">
          <div className="flex items-center space-x-2 bg-[#CBFC01] text-black px-2 py-1 rounded mb-4">
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Главная</span>
          </div>
          {['Настройки пользователя', 'Верификация', 'Операции с монетой', 'Платежи и переводы', 'NEO-Bank ITS', 'P2P обменник', 'Кошелёк', 'Карты', 'Пенсионная программа', 'Инвестиционная программа'].map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-400 mb-4">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </nav>

        {/* Кнопка "Войти в бизнес" */}
        <button className="w-full bg-[#CBFC01] text-black py-2 rounded-full mt-4">
          Войти в бизнес
        </button>
      </aside>

      {/* Основной контент */}
      <main className="flex-1 p-8">
        {/* Верхняя навигация */}
        <nav className="flex justify-between items-center mb-8">
          <div className="flex space-x-8">
            {['Монета', 'Физ.лицам', 'Бизнесу', 'Банк', 'О проекте', 'Статистика'].map((item, index) => (
              <span key={index} className="text-white">{item}</span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-transparent text-white border-none">
              <option>РУС</option>
            </select>
            <button className="bg-[#CBFC01] text-black px-4 py-2 rounded-full flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              1234567890
            </button>
          </div>
        </nav>

        {/* Основные блоки */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 bg-[#19263e] rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-white mb-4">SMART</h2>
            <h2 className="text-5xl font-bold text-[#CBFC01] mb-4">INTELLECTUAL</h2>
            <h2 className="text-5xl font-bold text-white">TECHNOLOGY</h2>
          </div>
          <div className="col-span-2 bg-[#19263e] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Бизнес проекты</h3>
            <p className="text-white mb-4">
              При проведении расчетов пользователя картой, средства на ней конвертируются в нужную валюту, а затем отправляются получателю через банк-партнер. Все переводы конфиденциальны и безопасны.
            </p>
            <a href="#" className="text-[#CBFC01] font-bold">Изучить</a>
          </div>
        </div>

        {/* Карточки с информацией */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {['Безопасные P2P-переводы', 'Валюты в системе', 'Мультикарты', 'Социальная программа', 'Фонд Поддержки', 'Бизнес проекты'].map((title, index) => (
            <div key={index} className="bg-[#19263e] rounded-3xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
              <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="text-[#CBFC01] font-bold">Изучить</a>
            </div>
          ))}
        </div>

        {/* Строка с курсами валют */}
        <div className="bg-[#19263e] p-4 rounded-3xl flex justify-between text-white">
          {['FEHU/USD 45.51', 'FEHU/USD 0.93', 'FEHU/USD 45.51', 'FEHU/USD 0.93', 'FEHU/USD 45.51', 'FEHU/USD 0.93', 'FEHU/USD'].map((item, index) => (
            <span key={index} className={index % 2 === 0 ? 'text-red-500' : 'text-green-500'}>{item}</span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;