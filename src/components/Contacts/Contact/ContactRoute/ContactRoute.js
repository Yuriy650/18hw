import React from 'react';

function ContactRoute(props) {

    return (
        <div>
            <ul className="contact-list">
                <li className="contact-list">{props.firstName}</li>
                <li className="contact-list">{props.lastName}</li>
                <li className="contact-list">{props.phone}</li>
            </ul>
        </div>
    )
}

export default ContactRoute;