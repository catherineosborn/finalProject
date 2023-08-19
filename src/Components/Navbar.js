import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import DropdownList from './DropdownList';

export default function Bar({ reminders, handleCompleteReminder }) {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Reminders</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/CreateNewReminders">Create New Reminders</Nav.Link>
                  <Nav.Link href="/ViewReminders">View Reminders</Nav.Link>
                  <NavDropdown
                    title="Complete Reminders"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <DropdownList reminders={reminders} handleCompleteReminder={handleCompleteReminder} />
                  </NavDropdown>
                  <Nav.Link href="/RecentlyCompleted">Recently Completed Reminders</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}