import LoginMain from'./components/login_main';
import MyPage from './components/myPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<LoginMain/>} />
        <Route exact path="/MyPage/:id" element={<MyPage/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
