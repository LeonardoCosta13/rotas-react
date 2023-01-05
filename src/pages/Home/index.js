import React from "react";
import '../../styles.css';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>Pagina Home</h1>
      <p>Leo Programador</p>
        
      
      < Link to="/contato"><button>Contato</button></Link><br/><br/>
      < Link to="/sobre"><button>Sobre</button></Link><br/><br/>
    </div>
  );
}

export default Home;