import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Suggestions from '../pages/Suggestions';
import Terms from '../pages/Terms';
import DataCollection from '../pages/DataCollection';

type Props = {
  news: any;
};

const AppRoutes: React.FC<Props> = ({ news }) => {
  return (
    <Routes>
        <Route path="/" element={<Home news={news} />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dataCollection" element={<DataCollection />} />
        <Route path="/dataCollection" element={<DataCollection />} />
        <Route path="/dataCollection" element={<DataCollection />} />
    </Routes>
  );
};

export default AppRoutes;
