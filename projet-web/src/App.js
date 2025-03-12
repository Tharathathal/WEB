import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import RulesPage from "./components/pages/RulesPage";
import PlayersNames from './components/pages/PlayersNames';
import Game from "./components/pages/Game";
import Ranking from "./components/pages/Ranking";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rules' element={<RulesPage />} />
          <Route path='/players' element={<PlayersNames />} />
          <Route path='/game' element={<Game />} />
          <Route path='/ranking' element={<Ranking />} />
        </Routes>
        < Footer />
      </Router>
    </>
  );
}

export default App;
