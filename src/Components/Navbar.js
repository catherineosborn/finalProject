import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DropdownList from './DropdownList';
import { Link } from "react-router-dom"

export default function Bar() {
  return (
    <>
      {[false].map((expand) => (
        <nav key={expand} expand={expand.toString()} className="nav">
          <Container fluid>
            <Link to="/Home" className='site-title'>Reminders</Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
           <Navbar.Collapse>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  <li>
                  <CustomLink to="/Home">Home</CustomLink>
                  </li>
                  <li>
                  <CustomLink to="/CreateNewReminders">Create New Reminder</CustomLink>
                  </li>
                  <li>
                  <CustomLink to="/ViewReminders">View Reminders</CustomLink>
                  </li>
                  <li>
                  <NavDropdown
                    title="Complete Reminders"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item><DropdownList/></NavDropdown.Item>
                  </NavDropdown>
                  </li>
                  <li>
                  <CustomLink to="/RecentlyCompleted">Recently Completed Reminders</CustomLink>
                  </li>
                </ul>
               </Offcanvas.Body>
            </Navbar.Offcanvas>  
            </Navbar.Collapse>
            </Container>
        </nav>
      ))}
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname

  return (
    <Link to={to} className={path === to ? "active" : ""} {...props}>
      {children}
    </Link>
  );
}