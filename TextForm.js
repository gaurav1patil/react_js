import React, { useState } from 'react'

function TextForm() {
    const [text, setState] = useState("Enter text here");
    const handleChange = (event) => {
        setState(event.target.values)
    }
    const handleClearClick = () => {
        setState("")
    }
    let styleText = {
        "color": "red",
        "backgroundColor": "yellow"
    }
    return (
        <div>
            <form>

                <div className="container py-3">
                    <h1 style={styleText}>Enter text to analyze</h1>
                    {/* <label htmlFor="exampleFormControlTextarea1">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="7"></textarea>
                    <button type="button" classNme="btn-btn-primary px-3" onClick={handleClearClick}>Clear Text</button>

                </div>

            </form>
        </div>
    )
}

export default TextForm
