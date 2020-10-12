import React, { Component } from "react"
import {Link} from "react-router-dom"
import "../css/corousol.css"
import { DataContext } from "../files/Context"

export default class Corousol extends Component{

    static contextType =    DataContext;    
    myRef = React.createRef();

    // componentDidMount(){
    //     setInterval(() => {
    //         const slide = this.myRef.current;
    //         slide.scrollLeft += slide.offsetWidth;
    //         
    //             slide.scrollLeft = 0;
    //     }, 5000)
    // }

    getRandomImg = () => {
        const slide = this.myRef.current 
        return  Math.floor(Math.random() * slide.offsetWidth)
    } 

    prevClick = () => {
        const slide = this.myRef.current 
        slide.scrollLeft -= slide.offsetWidth;
        if (slide.scrollLeft <=0 ){
            slide.scrollLeft = slide.scrollWidth;
        }
    }

    nextClick = () => {
        const slide = this.myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)){
            slide.scrollLeft = 0;
        }
    }

    render = () =>{
        const {products } = this.context 
        return (
            <div className="wrapper">
                <div className="apps" ref={this.myRef}>
                    {
                        products.map(product =>(
                            <div className="carol_card" key={product._id}>
                                <img src={product.src} alt=""/>
                                <div>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p><Link to={`/product/${product._id}`}>More</Link></p>
                                </div>
                            </div>  
                        ))
                    }
                    
                </div>
                <div className="row">
                    <div className="prev" onClick={this.prevClick}>
                        <p>prev</p>
                    </div>
                    <div className="next" onClick={this.nextClick}>
                        <p>next</p>
                    </div>
                </div>
            </div>
        )
    }
}