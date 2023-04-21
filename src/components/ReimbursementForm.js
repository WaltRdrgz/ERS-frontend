import { Form, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


import '../css/ReimbursementForm.css';



function ReimbursementForm() {

    const [reimbursement, setReimbursement] = useState({
        "reimbursementType": "",
        "amount": "",
        "description": "",
        "dateOfExpense": "",
        "owner": "username",
        "status": "Submitted"
    });
    const [reimbursementType, setReimbursementType] = useState("");
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState("");
    const [dateOfExpense, setDateOfExpense] = useState("");
    const [owner, setOwner] = useState('username');
    const [status, setStatus] = useState('Submitted');
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('ErrorMsg');

    let navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setReimbursement(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    function handleSuccess(e) {
        navigateToTable();
    }

    function handleCreate(e) {
        e.preventDefault();
        console.log("clicked submit:" + JSON.stringify(reimbursement));

        makeRequest();
    }

    function makeRequest() {


        const url = "http://localhost:8081/reimbursements/";
        let res = axios.post(url, reimbursement, {
            auth: {
                username: "admin",
                password: "password"
            }
        }).then(res => {
            console.log(res);
            setShow(true);
        }).catch(function (error) {
            setErrorMsg(error.message);
            setShowError(true);
            console.error(error);
        })


    }


    function navigateToTable() {
        navigate("/ers/list", { replace: true });
    }

    return (
        <>

            <main>
                <h2>Submit Reimbursement</h2>
                <p>You can do this, I believe in you.</p>
            </main>

            <Alert show={show} variant="success">
                Reimbursement Request Created Successfully!
                <div className="success-button">
                    <Button onClick={handleSuccess} variant="outline-success">
                        Back to Reimbursement List
                    </Button>
                </div>
            </Alert>

            <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {errorMsg}
                    <br/>
                    Please Try Again.
                </p>
            </Alert>


            <Form onSubmit={handleCreate} className="form-container">
                <Form.Group as={Row} className="type-dropdown" >
                    <Col sm={4}>
                        <Form.Label  >Reimbursement Type</Form.Label>
                    </Col>
                    <Col sm={8}>
                        <Form.Select name="reimbursementType" onChange={handleChange} aria-label="Default select example">
                            <option>Select Reimbursement Type</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row} className="form-amount" >
                    <Col sm={4}>
                        <Form.Label column sm={2} >Amount</Form.Label>
                    </Col>
                    <Col sm={8}>
                        <Form.Control name="amount" onChange={handleChange} placeholder="0.00" />
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                    <Col sm={4}>
                        <Form.Label column sm={2} >Description</Form.Label>
                    </Col>
                    <Col sm={8}>
                        <Form.Control as="textarea" name="description" onChange={handleChange} placeholder="Expense claim description" />
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                    <Col sm={4}>
                        <Form.Label column sm={2} >Date</Form.Label>
                    </Col>
                    <Col sm={8}>
                        <Form.Control name="dateOfExpense" onChange={handleChange} placeholder="xx-xx-xxxx" />
                    </Col>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        </>
    );
}
export default ReimbursementForm; 