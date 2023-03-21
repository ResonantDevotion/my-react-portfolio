// importing various folders/libraries to use here
import React from "react";
import "./style.css";
import Nav from 'react-bootstrap/Nav';

//function that creates a header element for the App, using bootstrap navbar
function Header() {
    return (
        <section>
            <header className='container'>
                <div className="head-text">
                    <h1 className="center">Welcome to my Front-End Portfolio</h1>
                    <p className="center">Built with React!</p>
                </div>
            </header>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/" className="nav">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/ProjectGallery" eventKey="link-1" className="nav">Project Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Contact" eventKey="link-2" className="nav">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </section>
    );
}

//exports the file to be used elsewhere
export default Header;
