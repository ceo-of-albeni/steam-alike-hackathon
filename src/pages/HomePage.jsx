import React, { useState } from "react";
import "../styles/HomePage.css";
import Footer from "../components/Footer/Footer";
import GameList from "../components/GamesList";

const HomePage = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className="home_top">
        <img
          src="https://images.hdqwalls.com/wallpapers/overwatch-2-key-art-4k-ah.jpg"
          width="100%"
        />
        <h1>Games</h1>
      </div>

      <div>
        <GameList page={page} setPage={setPage} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
