import React, { useState, useRef } from 'react'
import Accordion from "./Accordion"
import "../css/faq.css"


function Faq() {
    
    return (
        <div className="faq_container">
            <h2>FAQ</h2>
            <Accordion title="Profit Sharing" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis natus laudantium eveniet ullam harum."/>
            <Accordion title="Profit Sharing" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis natus laudantium eveniet ullam harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis natus laudantium eveniet ullam harum."/>
            <Accordion title="Profit Sharing" 
            content="
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis natus laudantium eveniet ullam harum.</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis natus laudantium eveniet ullam harum.</p>
            "/>
        </div>
    )
}

export default Faq
