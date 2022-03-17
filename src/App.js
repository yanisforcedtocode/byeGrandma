// === packages
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// === components
import Header from './components/sections/header'
import Footer from './components/sections/footer';

// === pages
import HomePage from './pages/homePage';
import TimeLinePage from './pages/timeLinePage';
import CloseRelativesPage from './pages/closeRelativesPage';
import NoSuchPage from './pages/404Page';
 
// === variables


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<HomePage />} />
            <Route path ="timeline" element={<TimeLinePage />} />
            <Route path = "lovedones" element={<CloseRelativesPage />} />
            <Route path = "*" element={<NoSuchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
