import React, {useEffect, useState} from 'react';
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";
import './App.css';

const spotify = new SpotifyWebApi();



function App() {

  // const [token, setToken] = useState(null);
  const [{ user, token}, dispatch] = useDataLayerValue();

   // Run code on a give condition
   useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;

      if (_token) {

        dispatch({
          type: "SET_TOKEN",
          token: _token
        });
        // setToken(_token);

        spotify.setAccessToken(_token);

      spotify.getMe((err, user) => {
        if (!err) {
          dispatch({
            type: "SET_USER",
            user: user
          });
        } else {
          console.log(err);
        }
      });

      spotify.getUserPlaylists((err, playlists) =>{
        if(!err){
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists
          });
        } else {
          console.log(err);
        }
      });

      spotify.getPlaylist("37i9dQZEVXcNMaRPk8j7M8", (err, response) => {
        if (!err) {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response
          });
          console.log(response.images[0].url);
        } else {
          console.log(err);
        }
      });
    }
      
  }, []);

  console.log(user);
  console.log(token);
  

  return (
    <>
    {token ? <Player spotify={spotify} /> : <Login />}

    
    


   </>
  

  );
}

export default App;
