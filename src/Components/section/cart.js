import React, { Component } from "react"
import { DataContext } from "../files/Context"
import { Link } from "react-router-dom"


export default class Cart extends Component{
    static contextType = DataContext;
    render =() =>{
        const {cart} =this.context
        console.log(cart)
        return(
            <>
                {
                    cart.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>$ {item.price}</span>
                                </div>   
                                <p>${item.colors}</p>
                                <p>{item.description}</p>
                                <p>{item.content}
                                    <Link to="/cart" className="cart">
                                        Add to cart
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