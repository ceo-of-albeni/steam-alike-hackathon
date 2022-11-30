import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { musicsContext } from "../Context/musicsContext";

const Createmusics = () => {
  const navigate = useNavigate();
  const { createtrack } = useContext(musicsContext);
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [track, setTrack] = useState(null);
  const [image, setImage] = useState(null);
// jpg mp3
  function savetrack() {
    let newtrack = new FormData();
    newtrack.append("user", user);
    newtrack.append("title", title);
    newtrack.append("track", track);
    newtrack.append("image", image);
    createtrack(newtrack, navigate);
  }

  return (
    <div>
      <h2>Add track</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Title"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
    
    
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} /><br />
      {/* <input type="file" accept="audio/mp3*" onChange={e => setTrack(e.target.files[0])} /><br /> */}
      <button onClick={savetrack}>Save track</button>
    </div>
  );
};

export default Createmusics;
