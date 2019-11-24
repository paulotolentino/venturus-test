import React from 'react';
import { Navbar } from "react-bootstrap";

export default (props) => {
    return (
        <Navbar className="navbar">
          <Navbar.Brand className="logo" href="#home">
            {props.brand}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>{props.user}</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
    )
}