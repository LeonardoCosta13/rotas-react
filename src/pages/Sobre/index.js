import React from "react";
import '../../styles.css';
import { Link } from "react-router-dom";


function Sobre() {
  return (
    <div>
      <h1>Pagina Sobre</h1>
      <p>Leo Dev</p>

      < Link to="/"><button>Home</button></Link><br/><br/>
      < Link to="/contato"><button>Contato</button></Link><br/><br/>
        
    </div>
  );
}

export default Sobre;