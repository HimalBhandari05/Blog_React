import React, { useState } from "react"


function HandleNice(message , name){
    console.log(name)
    return(
        <button onClick={()=>{
            console.log(message)
        }}> {message.name} + {message.message} </button>
    )
}

function LearnReact(){
    // learning about the onChange event first. 

    const [nice , setNice] = useState("")  // hook that sets value = "" rn and setValue sets the value in the value
    function handleChange(e){  // this function handles the changes .
        setNice(e.target.value) // this returns the input field value and set the value in the value 
    }
    const [value , setValue] = useState("");

    function handleButton(){
        setValue('Button is Clicked') // so this is it 
    }
    return (
        <div className="h-screen w-screen">
            <h1> This is fucked up </h1>
            <input value={nice} onChange={handleChange} />
            <br /> 
            <div>
                Name is : {nice}
            </div>

            <button className="" onClick={handleButton}>
                ClickMe
            </button>
            <p> Value is : {value} </p>

            <HandleNice message="nice one bitch" name="Himal" />
        </div>
    );
}


export default LearnReact