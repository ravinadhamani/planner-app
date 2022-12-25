import React from "react";
import DoingList from "./DoingList";
import DoneList from "./DoneList";
import TodoList from "./TodoList";
import Home from "./Home";

import '../App.css';

function Planner()
{
    return(
        <>
         <Home/>
        <div className='appMain'>
            <TodoList/>
            <DoingList/>
            <DoneList/>
        </div>
        </>
    )
}
export default Planner;