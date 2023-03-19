import React from "react";
import "./style.css";
import Carousel from 'react-bootstrap/Carousel';
import projects from '../../components/Project/projectInfo';

function ProjectGallery(props) {
    return (
        <Carousel>
            {projects.map(project => {
                return (
                    <Carousel.Item key={project.name}>
                        <img
                            className="d-block w-100"
                            src={project.image}
                            alt={project.name}
                        />
                        <Carousel.Caption className="workdayImg">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default ProjectGallery;



// Must render six instances of the Project component dynamically

// Be sure to store your project details data in a JSON file and import it into your project