import React, { useEffect, useRef, useState } from 'react';
import CreateArea from "../CreateArea/CreateArea";
import Note from "../Note/Note";
import { getNotes } from '../../services/notes';
import { deleteItem } from '../../services/notes';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';

import { getId } from "../Login/Login";
//import { getEmail } from "../Login/Login";

function Home() {  
  const [notes, setNotes] = useState([]);
  //const [id, setId] = useState([]);
  const [email, setEmail] = useState([]);
  const mounted = useRef(true);
  //const email = getEmail();
    
  const id = getId();
  const userNotes = notes.filter(function(item) {
    return item.userId==id;
  });
  
/*
 useEffect(() => {
  mounted.current = true;    
  if(id) {    
    return;
  }
  getId()  
    .then(id => {
      if(mounted.current) {
        setId(id)
      }
    })
     
    return () => mounted.current = false; 
      
},[id])  
*/
/*
useEffect(() => {
  mounted.current = true;    
  if(email) { 
    console.log("moje email: "+email);   
    return;
  }
  getEmail()  
    .then(id => {
      if(mounted.current) {
        setEmail(email)
      }
    })
     
    return () => mounted.current = false; 
      
},[email])  
*/

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
    <h1 ><SettingsPowerIcon style={{fontWeight: 700, fontSize: "72px", color: "#fff"}}/></h1>
    <CreateArea userId={id}/>
{/*
    {notes.map(item => <Note key={item.id} id={item.id} time={item.time} title={item.title} content={item.content} onDelete={deleteNote} />)}
*/}
    {userNotes.map(item => <Note key={item.id} id={item.id} time={item.time} title={item.title} content={item.content} onDelete={deleteNote} />)}

    <h1>id: {id}</h1>
    </div>
  );
}

export default Home;