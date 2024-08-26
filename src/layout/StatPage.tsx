import React, { useLayoutEffect, useState , useRef, useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';



const StatPage: React.FC = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
    <div className='bg-[linear-gradient(114.54deg,_#001131_34.33%,_#161616_95.7%)] bg-[linear-gradient(132.6deg,_#001131_26.05%,_#161616_100%)]'>
        <Header />
        <main>
        </main>
        <Footer />
    </div>
    );
};

export default StatPage;
    