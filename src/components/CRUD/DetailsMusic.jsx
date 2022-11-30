import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { musicsContext } from "../Context/musicsContext";

const DetailsMusic = () => {
  const { getOnetrack, onetrack } = useContext(musicsContext);

  const params = useParams();

  useEffect(() => {
    getOnetrack(params.id);
  }, []);

  return onetrack ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "8%",
        marginTop: "2%",
      }}>
      <Card
        style={{ margin: "10px", display: "flex", flexDirection: "row" }}
        sx={{ maxWidth: 900 }}>
        <CardMedia
          component="img"
          alt="error"
          height="450"
          image={onetrack.image}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "midnightblue",
              fontWeight: "bold",
              fontSize: "35px",
            }}>
            {onetrack.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              paddingLeft: "1%",
              fontSize: "23px",
              fontWeight: "lighter",
              color: "grey",
            }}>
            {onetrack.user}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontSize: "20px", fontWeight: "light" }}>
            {onetrack.track}
          </Typography>
         
        </CardContent>
      </Card>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default DetailsMusic;
