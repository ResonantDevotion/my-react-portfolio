import React from "react";
import "./style.css";
import Carousel from 'react-bootstrap/Carousel';

function ProjectGallery() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='../utils/imagess/projects/moviecocktail.png'
                    alt="Random Movie Cocktail combination selector"
                />
                <Carousel.Caption>
                    <h3>Group collaborations</h3>
                    <p>Group collaborations using third party APIs, local storage and advanced javascript to help plan the perfect evening.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../utils/imagess/projects/passwordgen.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Complex algorithms</h3>
                    <p>Using complex algorithms to create a safe and secure random password.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../utils/imagess/projects/teamprofilegen.png"
                    alt="using"
                />
                <Carousel.Caption>
                    <h3>Team profile Generator</h3>
                    <p>
                    Using x to create x
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img id="workdayImg"
                    className="d-block w-100"
                    src='../utils/imagess/projects/workdayscheduler.png'
                    alt="A web app to schedule your workday"
                />
                <Carousel.Caption>
                    <h3>Workday scheduler</h3>
                    <p>Using x to create x</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProjectGallery;
