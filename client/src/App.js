import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/views/Main'
import Creator from './components/views/Creator'
import SingleAuthor from './components/SingleAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import CatchAll from './components/CatchAll';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<Creator/>} path="/create"/>
          <Route element={<SingleAuthor/>} path="/author/:id" />
          <Route element={<UpdateAuthor/>} path="/author/edit/:id" />
          <Route element={<CatchAll/>} path="*"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
