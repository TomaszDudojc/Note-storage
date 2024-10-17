import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreateArea from "../CreateArea/CreateArea";
import Note from "../Note/Note";

function App() {
  const { token, setToken } = useToken();
 
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
      <Header />
      <CreateArea />
      <Note time="data" title="tytulik"content="treść..." />
      <Note time="czas" title="2 notatka"content="jej treść..." />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />           
          <Route path="/preferences" element={<Preferences />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
