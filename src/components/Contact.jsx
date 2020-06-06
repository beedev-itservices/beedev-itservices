import React from "react";
import { useHistory } from "react-router-dom";

function Contact() {
    const history = useHistory();
    console.log("ml: contact:", history);

    return (
        <div className="main-wrapper">
            <h1>Contacting BeeDev IT Services</h1>
            <div className="content">
            <p><b>Chat with us!</b> - Below is a button for you to reach out to us at anytime.  If we aren't available a form will be available to let us know.</p>
            <p><b>Facebook</b> - Click <a href="https://www.facebook.com/beedevitservices" target="_blank">here</a> to view our page</p>
            <p><b>Email:</b> - Feel free to send an email to <a href="mailto: melissa@beedev-itservices.com">melissa@beedev-itservices.com</a></p>
            </div>
        </div>
    );
}

export default Contact;