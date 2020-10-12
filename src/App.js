import React, { Component } from "react"
import { BrowserRouter,  Route} from "react-router-dom"
import NavBar from "./Components/Navbar/NavBar"
import Home from "./Components/files/Home"
import About from "./Components/files/About"
import Contact from "./Components/files/Contact"
import {DataProvider} from "./Components/files/Context"
import Section from "./Components/files/Section"
import Footer from "./Components/files/footer"
import Blog from "./Components/files/blog_section"
import Login from "./Components/userAuthentification/login"



export default class App extends Component{

  render = () =>{
    return (
      <DataProvider>
        <BrowserRouter>
          <div className="app">
              <NavBar/>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/product" component={Section}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/login" component={Login}/>
              <Footer/>
          </div>
        </BrowserRouter>
      </DataProvider>
    )
  }
}