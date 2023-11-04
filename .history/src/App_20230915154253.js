import { React } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'

/* pages */

import HomePage from './pages/HomePage';
import LobbyPage from './pages/lobby/LobbyPage';
import PlayPage from './pages/lobby/PlayPage';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/lobby' element={<LobbyPage/>}></Route>
        <Route path='/lobby/play' element={<PlayPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
