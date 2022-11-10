import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gameContext } from "../gameContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GameList = () => {
  const { getGames, games, deleteGame } = useContext(gameContext);

  useEffect(() => {
    getGames();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="CardList">
     
     {games.map((item) => ( 
     <Card style={{margin:'20px'}} sx={{ maxWidth: 345 }}>
      
       
     
      <CardMedia
        component="img"
        alt="error"
        height="240"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {item.price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {item.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteGame(item.id)}>Delete</Button>
        <Button  onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
        <Button  onClick={() => navigate(`/details/${item.id}`)}>
            Details
          </Button>

      </CardActions>
     
    </Card> ))}
   
    </div>
    

  );
};

export default GameList;

