import React  , { useState } from "react";
import Navbar from "./components/navbar"

function LearningUseState(){


    const [Counter , setCount] = useState(0);
    const [name , setName] = useState("");

    // ask the name from the user and change it. 

    function SetTheName(){
        let username = prompt("Enter user name!");
        setName(username);
    }

    function increaseCounter(){
        setCount(Counter+1)
    }
    function decreaseCount(){
        if (Counter  > 0) {
            setCount(Counter-1)
        }
    }
    return(
        <>
             <Navbar />
             <h1 className="text-3xl"> {Counter} </h1>
             <h1 className="text-4xl"> Name : { name } </h1>

             <div id="container" className="flex gap-5 flex-col">
                <div id="button-to-change-name">
                    <button onClick={SetTheName}  className="p-1 text-3xl"> Change the Name  </button>
                </div>
                <div id="container">
                    <button onClick={increaseCounter} className="p-3 bg-blue-700 mr-10 text-3xl rounded-sm">+</button>
                    <button onClick={decreaseCount} className="p-3 bg-blue-700 rounded-sm text-3xl">-</button>
                </div>
             </div>
        </>
    )
}

export default LearningUseState