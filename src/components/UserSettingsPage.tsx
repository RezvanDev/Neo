import React from 'react';
import { ChevronDown, Edit2, Bell, Shield } from 'lucide-react';

const UserSettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white font-sans">
      <header className="bg-[#161B22] p-4 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-8">
          <img src="/sit-logo.png" alt="SIT Logo" className="h-8" />
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Монета</a>
            <a href="#" className="text-gray-300 hover:text-white">Физ.лицам</a>
            <a href="#" className="text-gray-300 hover:text-white">Бизнесу</a>
            <a href="#" className="text-gray-300 hover:text-white">Банк</a>
            <a href="#" className="text-gray-300 hover:text-white">О проекте</a>
            <a href="#" className="text-gray-300 hover:text-white">Статистика</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-[#21262D] rounded-md px-2 py-1">
            <img src="/flag-ru.png" alt="RU" className="h-4 mr-2" />
            <span>РУС</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
          <div className="bg-yellow-400 text-black rounded-full px-4 py-2 flex items-center">
            <Bell size={16} className="mr-2" />
            <span>1234567890</span>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-[#161B22] p-4 border-r border-gray-700">
          <div className="space-y-4 mb-8">
            <AccountCard title="Инвестиционный счет" amount="**** ** **" currency="FERU" />
            <AccountCard title="Лицевой счет" amount="176 596.96" currency="FERU" />
            <AccountCard title="Платежная карта" amount="**** ** **" currency="FERU" />
          </div>
          <nav className="space-y-2">
            <NavItem label="Главная" />
            <NavItem label="Настройки пользователя" active />
            <NavItem label="Верификация" />
          </nav>
          <button className="w-full bg-yellow-400 text-black rounded-full py-2 mt-8 font-bold">
            Войти в бизнес
          </button>
        </aside>

        <main className="flex-1 p-8">
          <div className="bg-[#161B22] rounded-lg p-6 border border-gray-700">
            <div className="flex items-start mb-8">
              <img src="/user-avatar.jpg" alt="User" className="w-16 h-16 rounded-full mr-4" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Базовые настройки</h2>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Shield size={16} className="mr-1" />
                    Уровень защиты: Низкий
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <InfoCard title="SIT-номер" value="1234567890" />
                  <InfoCard title="Email" value="reginasavenko@mail.ru" />
                  <InfoCard title="Телефон" value="+79999999999" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <SettingItem icon="📞" title="Номер телефона" description="Используйте свой номер телефона для защиты своего аккаунта и транзакций." buttonText="Добавить" buttonColor="bg-red-500" />
              <SettingItem icon="👤" title="SIT-номер пользователя" description="Без него все операции с валютой заблокированы, к этому номеру привязывается кошелек." buttonText="Получить" buttonColor="bg-red-500" />
              <SettingItem icon="🔑" title="Регистрация SEED-фразы" description="Используйте свой номер телефона для защиты своего аккаунта и транзакций." buttonText="Подключить" buttonColor="bg-red-500" />
              
              <h3 className="text-xl font-bold mt-8 mb-4">Расширенные настройки</h3>
              
              <SettingItem icon="🛡️" title="Двухфакторная аутентификация" description="Чтобы повысить безопасность аккаунта, рекомендуется включить двухфакторную аутентификацию" buttonText="Подключить" buttonColor="bg-yellow-400" />
              <SettingItem icon="🖨️" title="Почтовый сервер" description="Почтовый сервер предназначен для автоматизации процесса отправки почтовых отправлений." buttonText="Подключить" buttonColor="bg-yellow-400" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const AccountCard = ({ title, amount, currency }) => (
  <div className="bg-[#21262D] rounded-lg p-4 border border-gray-700">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-400">{title}</span>
      <ChevronDown size={16} className="text-gray-400" />
    </div>
    <div className="flex justify-between items-center">
      <span className="font-bold">${amount}</span>
      <span className="text-xs bg-gray-700 px-2 py-1 rounded">{currency}</span>
    </div>
  </div>
);

const NavItem = ({ label, active }) => (
  <a
    href="#"
    className={`block py-2 px-4 rounded ${
      active ? 'bg-[#21262D]' : 'hover:bg-[#21262D]'
    }`}
  >
    {label}
  </a>
);

const InfoCard = ({ title, value }) => (
  <div className="bg-[#21262D] rounded-lg p-4 border border-gray-700">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-400">{title}</span>
      <Edit2 size={16} className="text-yellow-400" />
    </div>
    <span className="font-bold">{value}</span>
  </div>
);

const SettingItem = ({ icon, title, description, buttonText, buttonColor }) => (
  <div className="flex items-center bg-[#21262D] rounded-lg p-4 border border-gray-700">
    <div className="bg-yellow-400 p-2 rounded-full mr-4">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    <button className={`${buttonColor} text-black px-4 py-2 rounded-full`}>
      {buttonText}
    </button>
  </div>
);

export default UserSettingsPage;