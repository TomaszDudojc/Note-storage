//import React, { useEffect, useRef, useState } from 'react';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//import CreateArea from "../CreateArea/CreateArea";
//import Note from "../Note/Note";
import Home from "../Home/Home";
//import { getNotes } from '../../services/notes';
//import { deleteItem } from '../../services/notes';

function App() {
  const { token, setToken } = useToken();
  //const [notes, setNotes] = useState([]);
  //const mounted = useRef(true);  
/*
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
 */
  if(!token) {
    return (
    <div>
      <Header />
      <Login setToken={setToken} />
      <Footer />    
    </div>);
  }

  return (
    <div className="wrapper">
      <Header isLogged="true"/>
      {/*
      <CreateArea /> 
      {notes.map(item => <Note key={item.id} id={item.id} time={item.time} title={item.title} content={item.content} onDelete={deleteNote} />)}
      */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/dashboard" element={<Dashboard />} />           
          <Route path="/preferences" element={<Preferences />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );    
}

export default App;
