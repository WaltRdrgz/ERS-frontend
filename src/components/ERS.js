import { Table, Form, Button } from 'react-bootstrap';
import React from "react";
import ReimbursementTable from "./ReimbursementTable";
import ReimbursementForm from "./ReimbursementForm";
import '../css/ERS.css';
import { useNavigate, Outlet, Link } from "react-router-dom";





function ERS() {

  let navigate = useNavigate();



 

  return (
    <>
      <main>
        <h2>Welcome to the Expense Reimbursement System</h2>
      </main>

      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/ers/list">Home</Link> |{" "}
        <Link to="/ers/about">About</Link>

      </nav>


      <Outlet />


    </>
  );
}




export default ERS; 