import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../css/footer.css"

export default class FooterContent extends Component{

    render =() => {
        return (
            <div className="footer_container">
                <div className="main_footer">
                    <div className="company">
                        <h4><Link to="/">BuxxShop</Link></h4>
                        <span> Ever ready to meet the ever rising 
                            customers' demands with a top notch service</span>
                    </div>
                    <div className="company_links">
                        <div className="section1">
                                <div className="general">
                                <h6><Link to="/about">News</Link></h6>
                                <h6><Link to="/about">Impact</Link></h6>
                                <h6><Link to="/about">About</Link></h6>
                                <h6><Link to="/about">Our team</Link></h6>
                                <h6><Link to="/about">Our interns</Link></h6>
                                <h6><Link to="/about">Our content Specialists</Link></h6>
                                <h6><Link to="/about">Our leadership</Link></h6>
                                <h6><Link to="/about">Our contributors</Link></h6>
                                <h6><Link to="/about">Our finances</Link></h6>
                                <h6><Link to="/about">Careers</Link></h6>
                                <h6><Link to="/about">Internship</Link></h6>
                            </div>
                            <div className="contact">
                                <h3>Contacts</h3>
                                <h6><Link to="/about">Help center</Link></h6>
                                <h6><Link to="/about">Support Community</Link></h6>
                                <h6><Link to="/about">share your story</Link></h6>
                                <h6><Link to="/about">Press</Link></h6>
                            </div>
                        </div>
                        <div className="section2">
                            <div className="download">
                                <h3>Download Our Apps</h3>
                                <h6><Link to="/about">IOS app</Link></h6>
                                <h6><Link to="/about">Andriod</Link></h6>
                            </div>
                            <div className="Offers">
                                <h6><Link to="/about">Test Prep</Link></h6>
                                <h6><Link to="/about">Agent</Link></h6>
                                <h6><Link to="/about">Life skills</Link></h6>
                                <h6><Link to="/about">Computing</Link></h6>
                                <h6><Link to="/about">Arts & Craft</Link></h6>
                                <h6><Link to="/about">Economics</Link></h6>
                                <h6><Link to="/about">Reading & Languages</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/><hr/>
                <div className="sub_footer">
                    <select>
                        <option value="USA" name="country">USA</option>
                        <option value="ENG" name="country">ENG</option>
                        <option value="YORUBA" name="country">YORUBA</option>
                    </select>
                    <span>Country</span>
                </div>
                
            </div>
        )
    }
}