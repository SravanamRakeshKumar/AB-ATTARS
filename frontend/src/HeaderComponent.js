import React from 'react';
import './HomePageStyles.css';
import {useState} from 'react';
import img from './logo-removebg-preview.png';
function Header({fun})
{
    const [input,setInput]=useState("");

    function change(e)
    {
        e.preventDefault();
         fun(input);
    }
    return(
        <>
    <div id="container">
    <div id="logo">
        {/* <span>AB</span> */}
        {/* <p>Attar & Perfumes</p> */}
        <img src={img} alt="logo" />
    </div>
    <form id="search-bar" onSubmit={change}>
        <input  type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="search"></input>
        <input type="submit"></input>
    </form>
    </div>
        </>
    );
}
export default Header;