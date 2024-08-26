import React from "react";
import qr from "../img/qr.png";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Подробнее об SIT",
      links: ["О нас", "Связаться с нами", "Пользовательское соглашение", "Политика конфиденциальности"]
    },
    {
      title: "Услуги",
      links: ["Партнерство", "Комиссии", "Для бизнеса", "О рисках"]
    },
    {
      title: "Поддержка",
      links: ["Центр поддержки", "Защита от фишинга", "Объявления", "Сообщество SIT"]
    },
    {
      title: "Продукты",
      links: ["Купить криптовалюту", "P2P-переводы", "Конвертировать", "Торговать"]
    },
    {
      title: "Купить крипто",
      links: ["Купить USDC", "Купить USDT", "Купить SFH", "Крипто-калькулятор"]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#08142A] to-[#0A0F22] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-[#CBFB5C] text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm hover:text-[#CBFB5C] transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="bg-[#19263E] rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold mb-4 text-[#CBFB5C] text-lg text-center">Скачайте приложение</h4>
              <div className="flex justify-center">
                <img src={qr} alt="QR Code" className="w-32 h-32 rounded-lg shadow-md" />
              </div>
              <p className="mt-4 text-center text-sm">Отсканируйте QR-код для загрузки</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} SIT. Все права защищены.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-[#CBFB5C] transition-colors duration-200 mr-4">Условия использования</a>
              <a href="#" className="text-sm hover:text-[#CBFB5C] transition-colors duration-200">Конфиденциальность</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;