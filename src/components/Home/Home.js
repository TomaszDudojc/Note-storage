import React, { useEffect, useRef, useState } from 'react';
import CreateArea from "../CreateArea/CreateArea";
import Note from "../Note/Note";
import { getNotes } from '../../services/notes';
import { deleteItem } from '../../services/notes';

import { getId } from "../Login/Login";
//import { getEmail } from "../Login/Login";
//import Login from '../Login/Login';
import useToken from '../App/useToken';

function Home() {  
  const [notes, setNotes] = useState([]);
  //const [id, setId] = useState([]);
  const [email, setEmail] = useState([]);
  const mounted = useRef(true);
  //const email = getEmail();
  const { token, setToken } = useToken();
    
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

  function handleLogout(){
    setToken(false);
    window.location.reload();   
   
  }
  
  return (
    <div>        
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