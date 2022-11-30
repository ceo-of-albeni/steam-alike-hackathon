import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { musicsContext } from "../Context/musicsContext";
const MusicList = () => {
  const { getmusics, musics, deletetrack } = useContext(musicsContext);

  useEffect(() => {
    getmusics();
  }, []);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "200px",
      }}
    >
      <h3>hELLOOOOOOOOOOO</h3>
      <div
        className="CardList"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {
          musics.map((item) => (
            <>
              <h2>Made for Guilherme Dourado</h2>
              <div className="List">
                <a className="ListBlock" href="#">
                  <img className="ListImg" src={item.img} alt="" />
                  <h3 style={{ margin: "10px" }}> {item.title}</h3>
                  <h5 style={{ margin: "10px" }}>{item.user}</h5>
                </a>
              </div>
            </>
          ))
       }
      </div>
    </div>
  );
};

export default MusicList;
