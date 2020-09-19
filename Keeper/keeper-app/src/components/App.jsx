import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "../axios";
import Login from "./Login";

function App() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const loadNotes = async () => {
    await axios
      .get(`/notes/${user.googleId}`)
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
    
  };

  useEffect(() => {
    loadNotes();
  }, [token]);

  async function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    try {
      const newNotes = notes;
      newNotes.push(newNote);
      await axios.post(`/notes/update/${user.googleId}`, newNotes);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNote(noteId) {
    setNotes((prevNotes) => {
      return [...prevNotes.filter((note) => note._id !== noteId)];
    });

    try {
      const newNotes = notes.filter((note) => note._id !== noteId);
      await axios.post(`/notes/update/${user.googleId}`, newNotes);
    } catch (error) {
      console.log(error);
    }
  }

  const loginSuccess = (response) => {
    axios
      .post(`/login/${response.googleId}`)
      .then(setUser(response.profileObj))
      .then(setToken(response.tokenId))
      .catch((err) => console.log(err));
   
  };

  const loginFailure = (response) => {
    setToken("");
    alert("Failed to login!");
  };

  const logout = () => {
    setToken("");
    setUser("");
  };

  return (
    <div>
      <Header name={user.givenName} handleLogout={logout} />

      {token ? (
        <>
          <CreateArea onAdd={addNote} />

          {notes.map((note, index) => (
            <Note
              key={index}
              id={note._id}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          ))}
        </>
      ) : (
        <Login loginSuccess={loginSuccess} loginFailure={loginFailure} />
      )}

      <Footer />
    </div>
  );
}

export default App;
