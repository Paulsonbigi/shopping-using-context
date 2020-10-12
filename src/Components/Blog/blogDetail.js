import React, { Component } from "react"
import {Link} from "react-router-dom"
import { DataContext } from "../files/Context"

export default class blogs extends Component{

    static contextType = DataContext
    state = {
        blog: []
    }

    getProduct = () =>{
        if (this.props.match.params.id){
            const res = this.context.blogs;
            console.log(res)
            const data = res.filter( item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({
                blog: data
            })
        }
    }

    componentDidMount(){
        this.getProduct();
    }
    render = () =>{
        const {blog} = this.state
        console.log(blog)
            return (
                <>
                <div>Details</div>
                    {
                        blog.map(item =>(
                            <div className="details" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>{item.content}
                                        <Link to="/cart" className="cart">
                                            View cart details
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </>
            )
    }
}