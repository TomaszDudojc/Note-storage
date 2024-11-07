import React, { useEffect, useRef, useState } from 'react';
import CreateArea from "../CreateArea/CreateArea";
import Note from "../Note/Note";
import { getNotes } from '../../services/notes';
import { deleteItem } from '../../services/notes';

import { getId } from "../Login/Login";
import { getEmail } from "../Login/Login";


function Home() {  
  const [notes, setNotes] = useState([]);
  const mounted = useRef(true);
  const email = getEmail();
  const id = getId();

  const userNotes = notes.filter(function(item) {
    return item.userId==id;
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
    <CreateArea userId={id}/>

    {userNotes.map(item => <Note key={item.id} id={item.id} time={item.time} title={item.title} content={item.content} onDelete={deleteNote} />)}
    || TYLKO ROBOCZO!: ||
    <p>Logged user id: {id}</p>
    <p>Logged user email: {email}</p>
    </div>
  );
}

export default Home;