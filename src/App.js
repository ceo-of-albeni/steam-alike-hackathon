import React from "react";
// import MainRoutes from "./MainRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameContextProvider from "./gameContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import GameList from "./components/GamesList";
import EditGame from "./components/EditGame";
import CreateGame from "./components/CreateGame";
import Details from "./components/Details";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GameContextProvider>
          <Header />
          <Routes>
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateGame />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/edit/:id" element={<EditGame />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          <Footer />
        </GameContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
