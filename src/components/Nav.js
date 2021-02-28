import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

export default function Nav() {
    return (
   
            <header>
               <ul className="NavLinkElement">
                   <Link className="NavLinks" to="/" ><li>Search currency</li></Link>
                   <Link className="NavLinks" to="/actuality"><li>actuality</li></Link>
                   <Link className="NavLinks" to="/convert"><li>convert</li></Link>
                </ul> 
        </header>
    
    )
}
