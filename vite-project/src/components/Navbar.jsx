import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav>
            <h3 className="navbar--title"> <FontAwesomeIcon icon={ faEarthAmericas } style={{color: "white",}} /> my travel journal </h3>
        </nav>
    )
}