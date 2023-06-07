import React from 'react';
import './App.css';
import { RoomProvider } from './context';
import Home from './pages/home';
import Rooms from './pages/rooms';
import Singleroom from './pages/singleroom';
import Error from './pages/error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/navbar';

function App() {
  return (
    <RoomProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/*' element={<Rooms />} />
          <Route path='/rooms/:slug' element={<Singleroom />} />
          <Route path='*' element={<Error />} />
        </Routes>
    </RoomProvider>
  );
}

export default App;