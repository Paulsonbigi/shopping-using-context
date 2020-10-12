import React, { Component } from "react"
import { DataContext } from "../files/Context"

export default class Details extends Component{

    static contextType =  DataContext;
    state = {
        product: []
    }
    getProduct = () => {
        if (this.props.match.params.id){
            const res = this.context.products;
            const items = res.map( item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ product: items})
            console.log(items)
        }
    }

    componentDidMount =() => {
        this.getProduct();
    } 

    render = () => {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}