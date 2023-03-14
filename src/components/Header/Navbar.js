import React from "react";
import "./style.css";

function Header() {
    return (
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-toggle="tab" data-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                <button class="nav-link" id="nav-project-gallery-tab" data-toggle="tab" data-target="#nav-project-gallery" type="button" role="tab" aria-controls="nav-project-gallery" aria-selected="false">Project Gallery</button>
                <button class="nav-link" id="nav-contact-tab" data-toggle="tab" data-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
            </div>
        </nav>
    );
}


export default Header;


//   <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
//     {props.children}
//   </div>
