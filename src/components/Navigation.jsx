import React from 'react';
import { Nav } from "react-bootstrap";
import {
  faHome,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
    return (
        <Nav
          className="navlink"
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">
              <FontAwesomeIcon icon={faHome} />
            </Nav.Link>
          </Nav.Item>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Page Name</Nav.Link>
          </Nav.Item>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <Nav.Item>
            <Nav.Link eventKey="link-2">...</Nav.Link>
          </Nav.Item>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <Nav.Item>
            <Nav.Link eventKey="disabled" className="current">
              Current page
            </Nav.Link>
          </Nav.Item>
        </Nav>
    )
}