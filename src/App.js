import React from "react";
import GameContextProvider from "./gameContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameList from "./components/GamesList";
import EditGame from "./components/EditGame";
import CreateGame from "./components/CreateGame";
import Details from "./components/Details";
import Header from "./components/Header";
import SideBar from './components/SideBar'
const App = () => {
  return (
    <BrowserRouter>
      <GameContextProvider>
        <Header />
        <Routes>
          <Route path="/create" element={<CreateGame />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/edit/:id" element={<EditGame />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </GameContextProvider>
    </BrowserRouter>
  );
};

export default App;
