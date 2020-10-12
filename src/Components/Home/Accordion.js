import React, { useState, useRef } from 'react'
import "../css/faq.css"
function Accordion(props) {

    const [setActive, setActiveState ] = useState("");
    const [setHeight, setHeightState ] =useState("0px")

    const content = useRef(null)
    const toggleAccordion =() => {
        console.log("paul")
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    return (
        <div className="accordion_section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
    <p className="accordion_title">{props.title}</p>
            </button>
            <div className="accordion_content" ref={content} style={{maxHeight: `${setHeight}`}}>
                <div className="accordion_text"
                        dangerouslySetInnerHTML={{ __html: props.content}}/>
            </div>
        </div>
    )
}
export default Accordion
