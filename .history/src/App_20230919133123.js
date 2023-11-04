/* Utilities */

import { React } from "react";
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

/* components */

import Header from './components/Header/Header'
import { store } from './store';

/* pages */

import HomePage from './pages/HomePage';
import LobbyPage from './pages/lobby/LobbyPage';
import PlayPage from './pages/lobby/PlayPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Provider 
      store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/lobby' element={<LobbyPage/>}></Route>
        <Route path='/lobby/play' element={<PlayPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
