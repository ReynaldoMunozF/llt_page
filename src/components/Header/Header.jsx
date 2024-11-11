
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import { useNavigate } from "react-router-dom";
import Logo_principal from "../../assets/IMG/LOGO_PEQUEÑO.png";



export const Header = () =>{
    const navigate = useNavigate();
    
    return(
        //<div className="conatiner_nav">

    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <img  className= "img" src={Logo_principal} alt="soy yo" />
      <Navbar.Brand href="/">Latin Loler Team</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="Teams">TEAMS</Nav.Link>
          <Nav.Link href="Tournaments">TOURNAMENTS</Nav.Link>
          <Nav.Link href="Picks">PICKS</Nav.Link>
          {/* <NavDropdown title="Dropdo" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  //</div>
    )
}