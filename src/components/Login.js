import { Link, Navigate, useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../css/Login.css';




function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  let navigate = useNavigate();


  function handleSubmit(e){
    e.preventDefault();
    console.log("clicked submit");
    navigate("../ers/list", { replace: true });

  }


  return (
    <>
      <main>
        <h2>Login Page</h2>
        <p></p>
      </main>



      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group md="4" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              placeholder="enter username"
              type="text" />
          </Form.Group>
          <Form.Group md="4" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              placeholder="enter password"
              type="password" />
          </Form.Group>
          <Button className="Button" variant="primary" type="submit" >
            Submit
          </Button>

        </Form>
      </div>


    </>
  );
}

export default Login;