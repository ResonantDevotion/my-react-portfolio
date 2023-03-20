// importing various folders/libraries to use here
import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css";
import contactInfo from "../../components/ContactCards/contactCards";

// function that pulls together elements to make a contact page
function Contacts() {
    return (
        <>
            {/* This is a bootstrap card that has been altered to pull the contact info from another file */}
            <CardGroup className="cards">
                {contactInfo.map(contact => {
                    return (
                        <Card border="light" style={{ width: '18rem' }} key={contact.method}>
                            <Card.Header className="iconBox">
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d={contact.path} />
                                </svg>
                            </Card.Header>
                            <Card.Body className="cardBody">
                                <Card.Title>{contact.method}</Card.Title>
                                <Card.Text>
                                    {contact.description}
                                </Card.Text>
                                <a href={contact.link}><Button variant="outline-warning" className="button">{contact.button}</Button></a>{' '}
                            </Card.Body>
                        </Card>
                    )
                })}
            </CardGroup >
            {/* boostrap form  */}
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