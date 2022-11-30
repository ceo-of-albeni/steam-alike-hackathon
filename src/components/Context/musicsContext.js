import React, { useReducer } from "react";
import axios from "axios";

export const musicsContext = React.createContext();

const INIT_STATE = {
  musics: [],
  onetrack: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_musics":
      return {
        ...state,
        musics: action.payload.results,
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_track":
      return { ...state, onetrack: action.payload };
    default:
      return state;
  }
}



const MusicsContextProvider = ({ children }) => {
  const API = "http://18.197.10.36";
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createtrack(newtrack, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/music/tracks`, newtrack, config);
      console.log(res);
      navigate("/musics");
    } catch (err) {
      console.log(err);
    }
  }

  async function getmusics() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/music/tracks${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_musics",
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getOnetrack(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/music/tracks${id}`, config);
      dispatch({
        type: "GET_ONE_track",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function updatetrack(id, editedtrack, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}/music/tracks${id}/`,
        editedtrack,
        config
      );
      navigate("/musics");
      getmusics();
    } catch (err) {
      console.log(err);
    }
  }

  async function deletetrack(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/music/tracks${id}/`, config);
      getmusics();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <musicsContext.Provider
      value={{
        musics: state.musics,
        onetrack: state.onetrack,

        createtrack,
        getmusics,
        getOnetrack,
        updatetrack,
        deletetrack,
      }}
    >
      {children}
    </musicsContext.Provider>
  );
};

export default MusicsContextProvider;
