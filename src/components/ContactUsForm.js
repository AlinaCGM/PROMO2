import Form from "react-bootstrap/Form";
import "./Footer.css";
import Button from "react-bootstrap/Button";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import emailjs from "emailjs-com";

const SERVICE_ID= process.env.REACT_APP_SERVICEID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATEID;
const USER_ID = process.env.REACT_APP_USERID;

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        alert("Message was sent successfully");
      }, (error) => {
        console.log(error.text);
        alert("Error occured");
      }); 
    e.target.reset()
  };
  

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="form_control1 " controlId="exampleForm.ControlInput1" id="contactus">
     
        <Form.Control className="rounded_text" type="name" id="name" name="from_name" required placeholder="Name"  />
        
        <Form.Control
          className="rounded_text"
          type="email"
          id="email"
          name="user_email"
          required
          placeholder="name@example.com"
          
          
          
        />
      </Form.Group>
      <Form.Group className="mb-3 form_control1">
        <Form.Control
          className="rounded_text "
          as="textarea"
          type="message"
          rows={6}
          cols={10}
          id="message"
          name="message"
          required
          placeholder="Please write a message"
        />
        <div className="text-left">
          <Button variant="secondary" type="submit" className="rounded">
            Submit
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Contact;
