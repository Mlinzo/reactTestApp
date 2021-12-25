import React, { useState } from "react";

export default function TextChange(){
    const [inputText, changeText] = useState("Initial text")

    return (
        <div>
            <h1>Text: {inputText}</h1>
            <input 
            type="text" 
            value={inputText}
            onChange={event => changeText(event.target.value)}
            />
        <hr/>
        </div>
    )
}