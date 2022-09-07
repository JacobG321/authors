import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/views/Main'
import SingleAuthor from './components/SingleAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<SingleAuthor/>} path="/author/:id" />
          <Route element={<UpdateAuthor/>} path="/author/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
