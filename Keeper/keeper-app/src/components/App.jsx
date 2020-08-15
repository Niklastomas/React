import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import Login from "./Login";

function App(){

    const [notes, setNotes] = useState([]);
    
 
    useEffect( () => {

        axios.get('/getNotes')
        .then(function (res) {
            //handle success
            setNotes(res.data);
            console.log(res.data);
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

    }, []);
    
  
    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        });

        try {

            var params = new URLSearchParams();
            params.append('title', newNote.title);
            params.append('content', newNote.content);
            axios.post('/addNote', params);
            
        } catch (error) {
            console.log(error);
        }

        
        
    }

    function deleteNote(id){ 

        setNotes(prevNotes => {
            return prevNotes.filter(note => note._id !== id);
        });

 
        try {

            const params = new URLSearchParams();
            params.append("_id", id)
            axios.post("/deleteNote", params)

        } catch (error) {
            console.log(error);
        }
        
        
        
    }


    return <div>

    <Header />
    

     <CreateArea onAdd={addNote}/>
     {notes.map((note, index) =>
         <Note
          key={index}
          id={note._id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}


          />
     )}
      
      <Footer />
        <Footer />
        
    </div>
}

export default App;