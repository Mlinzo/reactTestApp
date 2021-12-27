import React, { useState } from "react";
import '../styles/App.css'

export default function TextChange(){
    const [inputText, changeText] = useState("Initial text")

    return (
        <div>
            <div className="centerText">
                <h1>Text: {inputText}</h1>
                <input 
                type="text" 
                value={inputText}
                onChange={event => changeText(event.target.value)}
                />
            </div>
        <hr/>
        </div>
    )
}