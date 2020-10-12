import React, { Component } from "react"
import SignUP from "./signUp"
import SignIn from "./signIn"
import { Route} from "react-router-dom"

export default class Login extends Component{

    render = () => {
        return (
            <div>
                <Route path="/login/signin" component={SignIn}/>
                <Route path="/login/signup" component={SignUP}/>
            </div>
        )
    }
}