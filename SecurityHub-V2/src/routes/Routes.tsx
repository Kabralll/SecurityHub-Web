import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Suggestions from '../pages/talkWithUs';
import Terms from '../pages/Terms';
import RecoverToken from '../pages/recoverToken';
import App from '../pages/Aplication';
import About from '../pages/About';

type Props = {
  news: any;
};

const AppRoutes: React.FC<Props> = ({ news }) => {
  return (
    <Routes>
        <Route path="/recoverToken" element={<RecoverToken />} />
        <Route path="/" element={<Home news={news} />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/terms" element={<Terms />} />
        <Route path='/app' element={<App />} />
        <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
