import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "../axios";
import Login from "./Login";
import GoogleLogin from "react-google-login";



function App() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const loadNotes = () => {
    // if (user.username !== "") {
    //   const params = new URLSearchParams();
    //   params.append("username", user.username);

    //   axios
    //     .post("/getNotes", params)
    //     .then((res) => {
    //       setNotes(res.data);
    //       console.log(res.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     });
    // }

      axios.get(`/notes/${user.googleId}`)
      .then((res) => setNotes(res.data))
      .catch(err => console.log(err));
      console.log(user);


  };

  useEffect(() => {
    loadNotes();
  }, [user]); 

  function addNote(newNote) {

    console.log(newNote);
    // try {
    //   const params = new URLSearchParams();
    //   params.append("username", user.username);
    //   params.append("title", newNote.title);
    //   params.append("content", newNote.content);
    //   axios.post("/addNote", params);
    // } catch (error) {
    //   console.log(error);
    // }
    // setNotes((prevNotes) => {
    //     return [...prevNotes, newNote];
    //   }); 

      const newNotes = notes;
      newNotes.push(newNote);
    

      axios.post(`/notes/add/${user.googleId}`, newNotes)
      .then(loadNotes())
      .catch(err => console.log(err));
      // console.log(user);

      
      
  }

  function deleteNote(noteId) {
    try {
      const params = new URLSearchParams();
      params.append("id", noteId);
      params.append("username", user.username);
      axios.post("/deleteNote", params);
    } catch (error) {
      console.log(error);
    }
    setNotes((prevNotes) =>{
        return [...prevNotes.filter((note) => note._id !== noteId)];
    });
    
  }

  // function handleLogin(loginInfo) {
  //   const username = loginInfo.username;
  //   const password = loginInfo.password;

  //   setUser({
  //     username: username,
  //     password: password,
  //   });

  //   const params = new URLSearchParams();
  //   params.append("username", user.username);
  //   params.append("password", user.password);
  //   axios.post("/login", params).then((res) => {
  //     setLogin(res.data);
  //   });
  //   loadNotes();
  // }

  const loginSuccess = (response) => {

    axios.post(`/login/${response.googleId}`)
    .then(setUser(response.profileObj))
    .then(setToken(response.tokenId))
    .catch(err => console.log(err));

    console.log(response);


  };

  const loginFailure = (response) => {
    console.log(response);
    setToken("");
    alert("Failed to login!");
  };

  const logout = () => {
    setToken("");
    setUser("");
  };

  return (
    <div>
      <Header name={user.givenName} handleLogout={logout}/>
      

      {token ? (
        <>
          <CreateArea onAdd={addNote} />
          {!loading &&
            notes.map((note, index) => (
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
      {/* <CreateArea onAdd={addNote}/>
     {!loading && notes.map((note, index) =>
         <Note
          key={index}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}


          />
     )} */}

      <Footer />
      <Footer />
    </div>
  );
}

export default App;
