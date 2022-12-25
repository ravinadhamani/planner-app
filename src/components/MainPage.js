import React from "react";
import img from "../todolist.jpg"
import "../App.css"
import Home from "./Home";

function MainPage()
{
    return(
        <>
            <Home/>
            <img src={img} alt={img} className="image" />
        </>
    )
}
export default MainPage;