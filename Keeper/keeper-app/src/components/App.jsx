import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App(){

    const [notes, setNotes] = useState([]);
    
    useEffect(function(){
        
        axios.get('/getNotes')
        .then(function (res) {
            //handle success
            setNotes(res.data);
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    });
    
  
    function addNote(newNote){
        // setNotes(prevNotes => {
        //     return [...prevNotes, newNote]
        // });

        var params = new URLSearchParams();
        params.append('title', newNote.title);
        params.append('content', newNote.content);
        axios.post('/addNote', params);

        
    }

    function deleteNote(id){ 
        
        const params = new URLSearchParams();
        params.append("_id", id)
        axios.post("/deleteNote", params)

        console.log(id);
        
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