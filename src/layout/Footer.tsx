import React, { useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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

    const animationVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.5,
                yoyo: Infinity,
                repeatDelay: 1
            }
        }
    };

    return (
        <footer className="bg-gradient-to-b from-[#08142A] to-[#0A0F22] text-gray-300 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {footerSections.map((section, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h4 className="font-semibold mb-4 text-[#CBFB5C] text-lg">{t(section.title)}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li 
                                        key={linkIndex}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <a href="#" className="text-sm hover:text-[#CBFB5C] transition-colors duration-200">
                                            {t(link)}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                    <motion.div 
                        className="col-span-2 md:col-span-3 lg:col-span-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="bg-[#19263E] rounded-2xl p-6 shadow-lg">
                            <h4 className="font-semibold mb-4 text-[#CBFB5C] text-lg text-center">{t('footer.downloadApp')}</h4>
                            <div className="flex justify-center">
                                <motion.div
                                    className="w-32 h-32 bg-[#CBFB5C] rounded-lg shadow-md flex items-center justify-center"
                                    variants={animationVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0A0F22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </motion.div>
                            </div>
                            <p className="mt-4 text-center text-sm">{t('footer.scanQRCode')}</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                    className="mt-12 pt-8 border-t border-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">&copy; {new Date().getFullYear()} SIT. {t('footer.allRightsReserved')}</p>
                        <div className="mt-4 md:mt-0">
                            <motion.a 
                                href="#" 
                                className="text-sm hover:text-[#CBFB5C] transition-colors duration-200 mr-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                {t('footer.termsOfUse')}
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="text-sm hover:text-[#CBFB5C] transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                {t('footer.privacy')}
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;