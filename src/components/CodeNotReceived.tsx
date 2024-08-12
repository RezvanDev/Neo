import React from 'react';

interface CodeNotReceivedInfoProps {
  email: string;
  onClose: () => void;
}

const CodeNotReceivedInfo: React.FC<CodeNotReceivedInfoProps> = ({ email, onClose }) => {
  return (
    <div className="bg-[#1C2340] rounded-3xl p-6 w-full max-w-md text-white">
      <h2 className="text-xl font-bold text-center mb-4">
        Не получили код верификации, отправленный на вашу эл. почту?
      </h2>
      <p className="text-center mb-4">
        Код верификации отправлен на вашу эл. почту.
        Если вы не получили код после нескольких
        попыток, попробуйте следующее:
      </p>
      <div className="bg-[#2C3454] rounded-lg p-4 mb-6">
        <ol className="list-decimal list-inside space-y-2">
          <li>Проверьте папку «Спам».</li>
          <li>Убедитесь, что вы используете этот адрес эл. почты — {email}</li>
          <li>Сообщение может прийти через несколько минут. Повторите попытку через 20 минут.</li>
          <li>Создайте белый список адресов эл. почты. Подробнее о настройке белого списка адресов эл. почты.</li>
        </ol>
      </div>
      <button
        className="w-full py-3 rounded-full bg-yellow-400 text-black font-bold"
        onClick={onClose}
      >
        Ок
      </button>
    </div>
  );
};

export default CodeNotReceivedInfo;