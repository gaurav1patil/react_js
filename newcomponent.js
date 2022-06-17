import React, { useState } from 'react'

function Newcomponent() {
    const [text, setText] = useState("");
    const hadleChange = (event) => {
        setText(event.target.value);
    }
    const resetText = () => {
        setText("");
    }
    const toUpper = () => {
        let x = text.toUpperCase();
        setText(x)
    }
    return (
        <div>
            hello
            <input type="text" onChange={hadleChange} value={text} />
            <button type="button" class="btn btn-primary" onClick={resetText}>Reset</button>
            <button type="button" class="btn btn-primary" onClick={toUpper}>Uppercase</button>
        </div>
    )
}

export default Newcomponent
