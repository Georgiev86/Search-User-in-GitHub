import React from "react";

function ContactUs() {

    const fullName = "Димитър";
    const lastName = "Георгиев";
    const phone = "+359878366990";
    const email = "dimitar.georgiev86@yahoo.com";
    
    const fullNameAndLastName = `${fullName} ${lastName}`;

    return (
            <div className="contact-us">
                <h2>Contact Us{}</h2>
                <div>
                    <label>Full Name:</label>
                    <div>{fullNameAndLastName}</div>
                </div>         
                <div>
                    <label>Phone:</label>
                    <div>{phone}</div>
                </div>
                <div>
                    <label>Email:</label>
                    <div>{email}</div>
                </div>
            </div>
            );
}
export default ContactUs;