import React, { Component } from "react"
import { Link} from "react-router-dom"
import "../css/Header.css"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { DataContext } from "../files/Context"

export default class NavBar extends Component{

    static contextType = DataContext;

    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render = () => {
        const { toggle } = this.state;
        const { cart } = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="logo">
                    <h4><Link to="/">BuxxShop</Link></h4>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <span>X</span>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                             <ShoppingBasketIcon className="shop"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}