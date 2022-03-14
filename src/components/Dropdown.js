import React, { useState } from 'react'
import "./Dropdown.css";
import{Link} from "react-router-dom"
import {Usd} from "./NavItems"
function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
  return (
    <>
   <ul
    className={ dropdown ? 'usd-submenu clicked' : 'usd-submenu'}
    onClick= {() => setDropdown(!dropdown)}
    >
       {Usd.map((item) =>{
           return(
               <li key={item.id}>
                   <Link to={item.path} className={item.cName}
                   onClick = {() => setDropdown(false)}
                   >
                       {item.title}
                   </Link>
               </li>
           );
       })}
   </ul>
    </>
  )
}

export default Dropdown