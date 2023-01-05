import React from "react";
import  './styles.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        
            <header>
                <h2>Leo Dev</h2><br /><br />
                    <div className="menu">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/sobre">Sobre</Link>
                        <Link className="link" to="/contato">Contato</Link>
                    </div>
            </header>

    )
}

export default Header;