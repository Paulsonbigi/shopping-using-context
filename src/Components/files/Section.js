import React, { Component } from "react"
import Products from "../section/Products"
import Details from "../section/Detail"
import Cart from "../section/cart"
import Blog from "../Blog/blogs"
import BlogDetails from "../Blog/blogDetail"
import {Route} from "react-router-dom"


export default class Section extends Component{

    render = () => {
        return(
            <section>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/cart" component={Cart}/>
                <Route exact path="/blog" component={Blog}/>
                <Route path="/blog/:title" component={BlogDetails}/>
            </section>
        )
    }
} 