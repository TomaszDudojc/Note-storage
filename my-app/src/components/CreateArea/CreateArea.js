import React, { useState , useRef, useEffect} from "react";
import { setItem } from '../../services/notes';


function CreateArea(props) {  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); 
  const [alert, setAlert] = useState(false);
  const now = new Date().toLocaleString();
  const [time, setTime] = useState(now); 
  const mounted = useRef(true); 

  setInterval(updateTime, 1000);  
  
  function updateTime() {
    const newTime = new Date().toLocaleString();
    setTime(newTime);
  }  

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        if(mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(time, title, content)
      .then(() => {
        if(mounted.current) {       
          setTitle('');
          setContent('');
          setAlert(true);
        }
      })
  };
  

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>        
        <input name="time" onChange={e => setTime(e.target.value)} value={time} disabled/>
        <input name="title" onChange={e => setTitle(e.target.value)} value={title} placeholder="Title" required/>
        <textarea name="content" onChange={e => setContent(e.target.value)} value={content} placeholder="Take a note..." rows="3" required/>
        <button type="submit">Add</button>
      </form>
      {alert && <h3 className="info"> Note added 🖋</h3>}
    </div>        
  );
}

export default CreateArea;
