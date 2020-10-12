import React, { Component } from "react"
import {Route} from "react-router-dom"
import Blogs from "../Blog/blogs"
import blogDetails from "../Blog/blogDetail"

export default class Blogg extends Component{

    render = () => {
        return(
            <div id="product">
                <Blogs/>
        </div>
        )
    }
}
