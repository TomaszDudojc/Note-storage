import React from "react";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
    
    <div className="container">
      <Header />
      <Form isRegistered={0} />
      <Form isRegistered={1} />  
      <div className="googleLink">    
      <a href="/auth/google" role="button">
        <i className="fab fa-google"></i>
        Sign In with Google
      </a>
      </div> 
      <Footer />
      
    </div>
  );
}

export default App;
