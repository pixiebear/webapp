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
                    <Route path='*' element={<ErrorPage />}/>
                </Routes>
          
                <Footer />
        
        </AnimatePresence>
    </>

    );


}


export default AnimatedRoutes;