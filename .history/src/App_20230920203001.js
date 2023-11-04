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
import LoginPage from './pages/Login/LoginPage';
import ForgotPasswordPage from "./pages/Login/ForgotPasswordPage";
import SignUpPage from "./pages/Login/SignUpPage";
import TopUpPage from "./pages/TopUpPage";


function App() {
  return (
    <Provider 
      store={store}>
      <Header />
      <div className='custom-body'>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/lobby' element={<LobbyPage/>}></Route>
          <Route path='/lobby/play' element={<PlayPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/account-recovery' element={<ForgotPasswordPage />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/top-up' element={<TopUpPage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
