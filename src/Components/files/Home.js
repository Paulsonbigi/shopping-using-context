import React, { Component } from "react"
import FirstOverlay from "../Home/firstOverlay"
import "../css/Home.css"
import Corousol from "../Home/Corousol"
// import Blog from "../Blog/blogs"
import FAQ from "../Home/Faq"


export default class Home extends Component{

    render = () =>{ 
        return (
            <div className="home_overlay">
               <FirstOverlay/>      
               <Corousol/>
               <FAQ/>
            </div>
        )
    }
}