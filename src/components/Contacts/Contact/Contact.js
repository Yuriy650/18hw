import React from 'react';
import './Contact.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import ContactRoute from "./ContactRoute/ContactRoute";


class Contact extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {console.log(this.props)}
                    <NavLink to={`/contacts/id`}>
                        <div className="contactBlock">
                            <img className="imageGender" src={this.props.imageGender} alt='gender'/>
                            <p className="dataContact">{this.props.firstName}</p>
                            <p className="dataContact">{this.props.lastName}</p>
                            <p className="dataContact">{this.props.phone}</p>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <Route exact path="/contacts/:id" render={() => <ContactRoute {...this.props}/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Contact;