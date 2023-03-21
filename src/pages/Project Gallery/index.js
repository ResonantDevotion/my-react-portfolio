// importing various folders/libraries to use here
import React from "react";
import "./style.css";
import Carousel from 'react-bootstrap/Carousel';
import projects from '../../components/Project/projectInfo';

// a function that allows me to create a bootstrap carousel of my FEWD projects
function ProjectGallery() {
    return (
        <div className="carousell">
            <Carousel>
                {/*this gathers the collated project information and 'maps' it onto the bootstrap template */}
                {projects.map(project => {
                    return (
                        <Carousel.Item key={project.name}>
                            <img
                                className="d-block w-100"
                                src={project.image}
                                alt={project.name}
                            />
                            <Carousel.Caption className="projectSection">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div>
                                    <a href={project.link}><button className="button">Click here to see it deployed</button></a>
                                    <a href={project.github}><button className="button">Click here to go to the repo</button></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default ProjectGallery;
