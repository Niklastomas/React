import React, {useState, useEffect, useCallback} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import Login from "./Login";

function App(){

    const [notes, setNotes] = useState([]);
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    
 
    const loadNotes = () => {

        if(user.username !== ""){
            const params = new URLSearchParams();
            params.append("username", user.username);
    
            axios.post('/getNotes', params)
            .then( (res) => {
                setNotes(res.data);
                console.log(res.data);
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }  

    };

    useEffect  (() => {
        loadNotes();

    }, []);

  
    function addNote(newNote){

        setLoading(true);

      setNotes(prevNotes => {
        return [
            ...prevNotes,
            newNote
        ];
      });
     try {
        
        const params = new URLSearchParams();
        params.append("username", user.username);
        params.append("title", newNote.title);
        params.append("content", newNote.content);
        axios.post("/addNote", params);
        
         
     } catch (error) {
         console.log(error);
     }

     setLoading(false);
     console.log(notes);
        
    }

    function deleteNote(id){ 
 
        try {

            const params = new URLSearchParams();
            params.append("_id", id)
            axios.post("/deleteNote", params)
            .then(loadNotes());

        } catch (error) {
            console.log(error);
        }
        
    }
    
    function handleLogin(loginInfo){
      const username = loginInfo.username;
      const password = loginInfo.password;
      
      setUser({
        username: username,
        password: password
      });


      const params = new URLSearchParams();
      params.append("username", user.username);
      params.append("password", user.password);
      axios.post("/login", params)
      .then((res) => {
          setLogin(res.data);
          console.log(login);
      });
    loadNotes();

    }


    return <div>
     
    

    <Header />

    {login ? <>
     <CreateArea onAdd={addNote}/>
     {!loading && notes.map((note, index) =>
         <Note
          key={index}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}


          />
     )}
     </> : <Login onSubmit={handleLogin} /> }
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
}

export default App;