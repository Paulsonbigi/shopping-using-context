import React, { Component } from "react"
import {Link} from "react-router-dom"
import { DataContext } from "../files/Context";

export default class Blogg extends Component{

    static contextType = DataContext;


    render = () => {
        const {blogs} = this.context;
        console.log(blogs)
        return(
            <div id="product">
            {
                blogs.map(item =>{
                    return <div className="card" key={item.index}>
                        <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <p>{item.description}</p>
                                    <Link path={`/blog/${item.title}`}>More</Link>
                                </div>
                    </div>
                })
            }
        </div>
        )
    }
}
