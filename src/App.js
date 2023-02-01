import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import QuiSuisJe from './pages/QuiSuisJe';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Resume />}></Route>
                <Route path='/portfolio' element={<Portfolio />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/qui-suis-je' element={<QuiSuisJe />}></Route>
                <Route path='*' element={<QuiSuisJe />}></Route>
            </Routes>
        </HashRouter>
    );
};

export default App;