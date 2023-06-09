// importing various folders/libraries to use here
import React from "react";
import "./style.css";

// function that creates a body for the homepage including information about what the app is about
function Homepage() {
    return (
        <section className="body">
            <div className="section">
                <p className="about">
                    Hello, I am Rebecca Wood. 
                    This is my REACT portfolio, showcasing all of my skills and projects built in the duration of my 4 month skills bootcamp by EdX.
                    Please explore this web app and test its limits, and let me know what you think by following my contacts.
                    My purpose in life is to serve life.
                </p>
                <img src='./images/me.jpg' id='me' alt="me"></img>
            </div>
        </section>
    );
}

export default Homepage;