import React, { useEffect, useRef, useState } from 'react';
import CreateArea from "../CreateArea/CreateArea";
import Note from "../Note/Note";
import { getNotes } from '../../services/notes';
import { deleteItem } from '../../services/notes';

function Home() {  
  const [notes, setNotes] = useState([]);
  const mounted = useRef(true); 
  const loggedUserEmail = localStorage.getItem('loggedUserEmail');
  const loggedUserIdString = localStorage.getItem('loggedUserId');  
  const loggedUserId = JSON.parse(loggedUserIdString);

  const userNotes = notes.filter(function(item) {
    return item.userId==loggedUserId;
  });
  

  useEffect(() => {
    mounted.current = true;    
    if(notes.length && !alert) {
      return;
    }
    getNotes()
      .then(items => {
        if(mounted.current) {
          setNotes(items)
        }
      })
      return () => mounted.current = false;      
  }, [alert, notes])  

  function deleteNote(id) { 
    deleteItem(id);   
  }

  return (
    <div>        
    <CreateArea userId={loggedUserId}/>
    {userNotes.map(item => <Note key={item.id} id={item.id} time={item.time} title={item.title} content={item.content} onDelete={deleteNote} />)}
    || TYLKO ROBOCZO!: ||
    <p>Logged user id: {loggedUserId}</p>
    <p>Logged user email: {loggedUserEmail}</p>
    </div>
  );
}

export default Home;