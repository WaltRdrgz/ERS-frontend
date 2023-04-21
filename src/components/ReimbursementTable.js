import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Form, Button, Alert } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from "react-router-dom";




function ReimbursementTable() {

    const [reimbursements, setReimbursements] = useState([]);
    

    let navigate = useNavigate();

    function handleCreate(e) {
      e.preventDefault();
      console.log("clicked create");

      navigate("/ers/create", { replace: true });
  
  
  }

    useEffect(() => {

        
        const client = axios.create({
            auth: {
                username: "admin",
                password: "password"
            }
        });
        const url = "http://localhost:8081/reimbursements/owner/username";

        try {
            client.get(url).then(res => {
                console.log(res);
                console.log(res.data);
                setReimbursements(res.data);
            });
        } catch (e) {
            console.log(e);
        }


    });


   

    return (
        <div className="container">
            <Button onClick={handleCreate} className="create-button" variant="primary">Create +</Button>{' '}
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Date Submitted</th>
                        <th>Amount</th>
                        <th>status</th>
                        <th>description</th>
                        <th>resolver</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map(reimbursement =>
                        <tr key={reimbursement.id}>
                            <td>{reimbursement.dateSubmitted}</td>
                            <td>{reimbursement.amount}</td>
                            <td>{reimbursement.status}</td>
                            <td>{reimbursement.description}</td>
                            <td>{reimbursement.resolver}</td>
                            <td>{reimbursement.reimbursementType}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}



export default ReimbursementTable;