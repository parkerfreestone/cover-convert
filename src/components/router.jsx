import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from '../App'
import { Home } from './home'
import { Playlist } from './playlist'
import { Login } from './login'

export const Router = () => {

  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="#" element={<Home />} />
      <Route path="playlist/:playlistID/:token" element={<Playlist />} />
      <Route path="login" element={<Login />} />
     
    </Routes>
  );
};
