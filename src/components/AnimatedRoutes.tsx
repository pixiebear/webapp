import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Mint from '../pages/Mint';
import Rarity from '../pages/Rarity';
import Staking from '../pages/Staking';
import Faq from '../pages/Faq';

import Shop from '../pages/Shop';
import ErrorPage from '../pages/ErrorPage';
import Footer from '../components/Footer';

import PersonalData from '../pages/Guides/PersonalData';
import SecureCave from '../pages/Guides/SecureCave';
import StartOwnNFT from '../pages/Guides/StartOwnNFT';
import VmTrading from '../pages/Guides/VmTrading';
import WalletCold from '../pages/Guides/WalletsCold';

import { AnimatePresence } from 'framer-motion/dist/framer-motion';

function AnimatedRoutes() {
    
    const location = useLocation();

    return (

    <>
        <AnimatePresence>
                <Header />

                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/mintXSad23dsx' element={<Mint />}/>
                    <Route path='/rarity' element={<Rarity />}/>
                    <Route path='/faq' element={<Faq />}/>
                    <Route path='/shop' element={<Shop />}/>
                    <Route path='/staking' element={<Staking />}/>

                    <Route path='/protect-your-personal-data' element={<PersonalData />}/>
                    <Route path='/secure-your-bear-cave' element={<SecureCave />}/>
                    <Route path='/wallets-and-cold-storage' element={<WalletCold />}/>
                    <Route path='/vm-trading-and-dyor' element={<VmTrading />}/>
                    <Route path='/starting-my-own-nft-project' element={<StartOwnNFT />}/>

                    <Route path='*' element={<ErrorPage />}/>
                </Routes>
          
                <Footer />
        
        </AnimatePresence>
    </>

    );

}


export default AnimatedRoutes;