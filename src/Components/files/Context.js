import React, { Component } from "react"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
import img7 from "../images/img7.png"
import img8 from "../images/img8.png"
import img9 from "../images/img9.png"
import img10 from "../images/img10.png"

export const DataContext = React.createContext();

export class DataProvider extends Component{

    state = {
        products: [
            {
                _id: 1,
                title: "Nike shoes 01",
                src: (img1),
                description: "this product is made from the very grades of material and as well qualitative",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                price: 23,
                color: ["red", "black", "cripmson", "teal"],
                count: 1
            },
            {
                _id: 2,
                title: "Nike shoes 02",
                src: (img2),
                description: "this product is made from the very grades of material and as well qualitative",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                price: 230,
                color: ["pink", "cripmson", "teal"],
                count: 1
            },
            {
                _id: 3,
                title: "Nike shoes 03",
                src: (img3),
                description: "this product is made from the very grades of material and as well qualitative",
                price: 213,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                color: ["white", "blue", "cripmson", "teal"],
                count: 1
            },
            {
                _id: 4,
                title: "Nike shoes 04",
                src: (img4),
                description: "this product is made from the very grades of material and as well qualitative",
                price: 120,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                color: ["brown", "white", "teal"],
                count: 1
            },
            {
                _id: 5,
                title: "Nike shoes 05",
                src: (img5),
                description: "this product is made from the very grades of material and as well qualitative",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                price: 80,
                color: ["blue", "black", "cripmson", "teal"],
                count: 1
            },
            {
                _id: 6,
                title: "Nike shoes 06",
                src: (img6),
                description: "this product is made from the very grades of material and as well qualitative",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                price: 100,
                color: ["red", "black", "cripmson", "teal"],
                count: 1
            },
            {
                _id: 7,
                title: "Nike shoes 07",
                src: (img7),
                description: "this product is made from the very grades of material and as well qualitative",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                price: 200,
                color: ["red", "black", "cripmson", "teal"],
                count: 1
            },
            {
                _id: 8,
                title: "Nike shoes 08",
                src: (img8),
                description: "this product is made from the very grades of material and as well qualitative",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                price: 211,
                color: ["red", "black", "cripmson", "teal"],
                count: 1
            },
            {
                _id: 9,
                title: "Nike shoes 09",
                src: (img9),
                description: "this product is made from the very grades of material and as well qualitative",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                price: 23,
                color: ["red", "black", "cripmson", "teal"],
                count: 1
            },
            {
                _id: 10,
                title: "Nike shoes 10",
                src: (img10),
                description: "this product is made from the very grades of material and as well qualitative",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam est maiores quasi dolores cumque rem fugit modi non repellendus?",
                price: 23,
                color: ["red", "black", "cripmson", "teal"],
                count: 1
            }
        ],
        cart: [],
        blogs: [
            {
                src:(img1),
                title: "Market rise after Covid-19",
                description: "biwef wefwef ef eff we efr rgtr t 5g5y5h hh5h",
                content: "eff 4g5h h5h5 ewef gth 5g5y4 j6htht t6jyj efsef thttkyu efwg rgthrth gthrt hhh6h efet34 dtthtyh 6th56th6h tggeg wefwer efwe4f334f etrthr5h "
            },
            {
                src:(img1),
                title: "Market rise after Covid-19",
                description: "biwef wefwef ef eff we efr rgtr t 5g5y5h hh5h",
                content: "eff 4g5h h5h5 ewef gth 5g5y4 j6htht t6jyj efsef thttkyu efwg rgthrth gthrt hhh6h efet34 dtthtyh 6th56th6h tggeg wefwer efwe4f334f etrthr5h "
            },
            {
                src:(img1),
                title: "Market rise after Covid-19",
                description: "biwef wefwef ef eff we efr rgtr t 5g5y5h hh5h",
                content: "eff 4g5h h5h5 ewef gth 5g5y4 j6htht t6jyj efsef thttkyu efwg rgthrth gthrt hhh6h efet34 dtthtyh 6th56th6h tggeg wefwer efwe4f334f etrthr5h "
            },
            {
                src:(img1),
                title: "Market rise after Covid-19",
                description: "biwef wefwef ef eff we efr rgtr t 5g5y5h hh5h",
                content: "eff 4g5h h5h5 ewef gth 5g5y4 j6htht t6jyj efsef thttkyu efwg rgthrth gthrt hhh6h efet34 dtthtyh 6th56th6h tggeg wefwer efwe4f334f etrthr5h "
            },
            {
                src:(img1),
                title: "Market rise after Covid-19",
                description: "biwef wefwef ef eff we efr rgtr t 5g5y5h hh5h",
                content: "eff 4g5h h5h5 ewef gth 5g5y4 j6htht t6jyj efsef thttkyu efwg rgthrth gthrt hhh6h efet34 dtthtyh 6th56th6h tggeg wefwer efwe4f334f etrthr5h "
            },
            {
                src:(img1),
                title: "Market rise after Covid-19",
                description: "biwef wefwef ef eff we efr rgtr t 5g5y5h hh5h",
                content: "eff 4g5h h5h5 ewef gth 5g5y4 j6htht t6jyj efsef thttkyu efwg rgthrth gthrt hhh6h efet34 dtthtyh 6th56th6h tggeg wefwer efwe4f334f etrthr5h "
            },
            {
                src:(img1),
                title: "Market rise after Covid-19",
                description: "biwef wefwef ef eff we efr rgtr t 5g5y5h hh5h",
                content: "eff 4g5h h5h5 ewef gth 5g5y4 j6htht t6jyj efsef thttkyu efwg rgthrth gthrt hhh6h efet34 dtthtyh 6th56th6h tggeg wefwer efwe4f334f etrthr5h "
            },
        ],
        themes : {
            light: {

                foreground: "#ffffff",
                background: "#222222"
            },
            dark: {
                foreground: "#ffffff",
                background: "#222222"
            }
        }
    };

    addCart = (id) =>{
        const {products, cart} =this.state;
        const data = products.filter(product =>{
            return product._id === id
        })
        // console.log(data)
        this.setState({cart: [...cart,...data]})
    }
    toggleTheme = () =>{
        
    }

    render = () => {
        const { products, cart, blogs } = this.state;
        const { addCart} =this;
        return(
            <DataContext.Provider value={{products, addCart, cart, blogs}}>
                {this.props.children }
            </DataContext.Provider>
        )
    }
} 