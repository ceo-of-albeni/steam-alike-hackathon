import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { gameContext } from "../gameContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Details = () => {
  const { getOneGame, oneGame } = useContext(gameContext);

  const params = useParams();

  useEffect(() => {
    getOneGame(params.id);
  }, []);

  return oneGame ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "8%",
        marginTop: "2%",
      }}>
      <Card
        style={{ margin: "10px", display: "flex", flexDirection: "row" }}
        sx={{ maxWidth: 800 }}>
        <CardMedia
          component="img"
          alt="error"
          height="450"
          image={oneGame.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title:{oneGame.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price:{oneGame.price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Type:{oneGame.type}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Description:{oneGame.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Details;
