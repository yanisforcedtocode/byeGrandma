// === packages
import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";


// === components
import Header from './components/sections/header'
import Footer from './components/sections/footer';
import MainFrame from './components/sections/mainFrame';

// === pages
import HomePage from './pages/homePage';
import TimeLinePage from './pages/timeLinePage';
import CloseRelativesPage from './pages/closeRelativesPage';
import NoSuchPage from './pages/404Page';

// === images

// === variables

function App() {
  return (
    <MainFrame>
      <Helmet>
                <meta charSet="utf-8" />
                <title>告別婆婆 Farewell, Grandma </title>
                <meta name="theme-color" content="#f4f0eb" />
            </Helmet>
      <BrowserRouter>
      <Header></Header>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path ="timeline" element={<TimeLinePage />} />
            <Route path = "lovedones" element={<CloseRelativesPage />} />
            <Route path = "*" element={<NoSuchPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </MainFrame>
  );
}

export default App;
