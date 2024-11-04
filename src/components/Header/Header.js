import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import useToken from '../App/useToken';

function Header(props) {
  const { token, setToken } = useToken();
  function handleLogout(){
    setToken(false);
    window.location.reload();
  }

  return (
    <header>
      <h1><EditNoteIcon fontSize="large"/> Note Storage {props.isLogged && <button className="logoutButton" onClick={handleLogout}><SettingsPowerIcon style={{fontWeight: 700, fontSize: "46px"}}/></button>}</h1>
    </header>
  ); 
}

export default Header;
