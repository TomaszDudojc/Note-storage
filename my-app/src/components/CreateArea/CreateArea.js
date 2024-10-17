import React, { useState } from "react";

function CreateArea(props) {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleString();
  const [time, setTime] = useState(now);
  function updateTime() {
    const newTime = new Date().toLocaleString();
    setTime(newTime);
  }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); 
  
  function submitNote(event) { 
    ;
  }  

  return (
    <div>
      <form className="create-note">
        <input name="time" onChange={e => setTime(e.target.value)} placeholder={time} disabled/>
        <input name="title" onChange={e => setTitle(e.target.value)} placeholder="Title"/>
        <textarea name="content" onChange={e => setContent(e.target.value)} placeholder="Take a note..." rows="3"/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>    
  );
}

export default CreateArea;
