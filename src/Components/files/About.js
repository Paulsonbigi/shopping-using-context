import React, { Component } from "react"
import "../About/About.css"
import about_img  from "../images/img13.png"

export default class About extends Component{

    render =() => {
        return (
            <div className="about">
                <h3>About BuxxStore</h3>
                <div className="about_container">
                    <div className="about_img">
                        <img src={about_img} alt=""/>
                    </div>
                    <div className="about_text">
                        <p>Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Laudantium 
                            porro atque odit, modi quae aliquam quis 
                            asperiores quod voluptates esse. Dolorem, 
                            voluptatibus est ullam in animi voluptatem 
                            aspernatur totam dolore.</p>
                    </div>
                </div>
            </div>
        )
    }
}