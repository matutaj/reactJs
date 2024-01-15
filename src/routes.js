import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './../src/pages/Main';
import Repository from './pages/Repository';

const PageRoute = () => {
    return (
        <BrowserRouter>
        <Routes>

            <Route path="/" exact Component={Main} />
            <Route path="/repository" Component={Repository} />
        </Routes>
        </BrowserRouter>
    );
};

export default PageRoute;
