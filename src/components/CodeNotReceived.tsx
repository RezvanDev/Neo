import React from 'react';
import { useTranslation } from 'react-i18next';

interface CodeNotReceivedInfoProps {
  email: string;
  onClose: () => void;
}

const CodeNotReceivedInfo: React.FC<CodeNotReceivedInfoProps> = ({ email, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1C2340] rounded-3xl p-6 w-full max-w-md text-white shadow-lg"
         style={{
           border: '1px solid #909090',
           boxShadow: '0 0 250px 0 #001C50',
           background: 'linear-gradient(135deg, #18233A 0%, #1E2B4A 100%)'
         }}>
      <h2 className="text-xl font-bold text-center mb-4">
        {t('codeNotReceived.title')}
      </h2>
      <p className="text-center mb-4">
        {t('codeNotReceived.description')}
      </p>
      <div className="bg-[#2C3454] rounded-lg p-4 mb-6">
        <ol className="list-decimal list-inside space-y-2">
          <li>{t('codeNotReceived.checkSpam')}</li>
          <li>{t('codeNotReceived.checkEmail', { email })}</li>
          <li>{t('codeNotReceived.waitAndRetry')}</li>
          <li>{t('codeNotReceived.whitelistEmail')}</li>
        </ol>
      </div>
      <button
        className="w-full py-3 rounded-full bg-[#CBFB5C] text-black font-bold hover:bg-[#B8E251] transition-colors duration-300"
        onClick={onClose}
      >
        {t('codeNotReceived.okButton')}
      </button>
    </div>
  );
};

export default CodeNotReceivedInfo;