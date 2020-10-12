import React, { Component } from "react"
import "../css/homeOverlay.css"
import Home_image  from "../images/img12.png"
import {Link} from "react-router-dom"
export default class FirstOverlay extends Component{

    render = () =>{
        return (
            <div className="home_container">
                 <div className="home_img">
                    <img src={Home_image} height="100%" alt=""/>
                </div>
                <div className="home_text">
                    <h3>Special Offer</h3>
                    <p>BuxxShop offers every customer quality products 
                        which suites your every demand </p>
                        <button className="home_btn">
                            <Link to="/product">Our products</Link>
                        </button>
                </div> 
            </div>
        )
    }
}