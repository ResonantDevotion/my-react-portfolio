import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form';
import "./style.css";

function Contacts() {


    return (
        <>
            <CardGroup>
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header className="iconBox">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                        </svg>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Github</Card.Title>
                        <Card.Text>
                            See my front-end development journey and work to date.
                        </Card.Text>
                        <a href='https://github.com/ResonantDevotion'><Button variant="outline-warning">Git to my Github</Button></a>{' '}
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header className="iconBox">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>LinkedIn</Card.Title>
                        <Card.Text>
                            Check out my public resume to see what I am about and what I have done so far.
                        </Card.Text>
                        <a href='https://www.linkedin.com/in/rebecca-wood-b3a365119/'><Button variant="outline-warning">Link to my LinkedIn</Button></a>{' '}
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header className="iconBox">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Gmail</Card.Title>
                        <Card.Text>
                            If after all that you still want to make contact, hit me up.
                        </Card.Text>
                        <a href='mailto:rebeccaseverowood@gmil.com'><Button variant="outline-warning">Sail to my gmail</Button></a>{' '}
                    </Card.Body>
                </Card>
            </CardGroup >

            <Form id='email'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id='email' >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted" id='text'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label id='message'>Add your message</Form.Label>
                    <Form.Control type="message" placeholder="Add your message here" />
                </Form.Group>
                <Button variant="primary" type="submit" id="button">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default Contacts;



// Must include contact information:

// Email address

// Link to a PDF version of your CV

// Link to your GitHub profile

// Link to your LinkedIn page

// Must have a contact form for handling events