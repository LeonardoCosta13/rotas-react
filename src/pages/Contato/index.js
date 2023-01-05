import React from "react";
import '../../styles.css'

import { Link } from "react-router-dom";

function Contato(){
    return(
        <div>
            <h1>Pagina Contato</h1>
            <p>Leo Desenvolvedor</p>

            < Link to="/"><button>Home</button></Link><br/><br/>
            < Link to="/sobre"><button>Sobre</button></Link><br/><br/>
        </div>
    )
}

export default Contato;