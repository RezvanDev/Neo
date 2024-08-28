import React, { useMemo } from "react";
import { useTranslation } from 'react-i18next';
import qr from "../img/qr.png";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerSections = useMemo(() => [
    {
      title: "footer.aboutSIT",
      links: ["footer.aboutUs", "footer.contactUs", "footer.userAgreement", "footer.privacyPolicy"]
    },
    {
      title: "footer.services",
      links: ["footer.partnership", "footer.commissions", "footer.forBusiness", "footer.risks"]
    },
    {
      title: "footer.support",
      links: ["footer.supportCenter", "footer.phishingProtection", "footer.announcements", "footer.sitCommunity"]
    },
    {
      title: "footer.products",
      links: ["footer.buyCrypto", "footer.p2pTransfers", "footer.convert", "footer.trade"]
    },
    {
      title: "footer.buyCrypto",
      links: ["footer.buyUSDC", "footer.buyUSDT", "footer.buySFH", "footer.cryptoCalculator"]
    }
  ], []);

  return (
    <footer className="bg-gradient-to-b from-[#08142A] to-[#0A0F22] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-[#CBFB5C] text-lg">{t(section.title)}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm hover:text-[#CBFB5C] transition-colors duration-200">
                      {t(link)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="bg-[#19263E] rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold mb-4 text-[#CBFB5C] text-lg text-center">{t('footer.downloadApp')}</h4>
              <div className="flex justify-center">
                <img src={qr} alt={t('footer.qrCodeAlt')} className="w-32 h-32 rounded-lg shadow-md" />
              </div>
              <p className="mt-4 text-center text-sm">{t('footer.scanQRCode')}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} SIT. {t('footer.allRightsReserved')}</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-[#CBFB5C] transition-colors duration-200 mr-4">
                {t('footer.termsOfUse')}
              </a>
              <a href="#" className="text-sm hover:text-[#CBFB5C] transition-colors duration-200">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;