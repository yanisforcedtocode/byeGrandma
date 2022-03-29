// === packages
import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

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
import bgHead from "./asset/images/homepage/intersection06.jpg"

// === variables

function App() {
  return (
    <MainFrame>
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
