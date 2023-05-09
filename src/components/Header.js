import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,Link } from 'react-router-dom'
import fire from '../Firebase';
import AuthenticationService from '../service/AuthenticationService';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const clickHandler = (e) => {
    e.preventDefault();
    fire.auth().signOut();
    AuthenticationService.logout();
    navigate('/login')

  }

  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#007580" }}>
        <Container>
          <Navbar.Brand style={{ color: "white" }}><Link to="/" style={{ color: "white",textDecoration: 'none'}}>Car Servicing</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link style={{color:"white"}} href="adminDashboard">Admin</Nav.Link>
                  <Nav.Link style={{color:"white"}} href="login">Login</Nav.Link>
                  <Nav.Link style={{color:"white"}} href="login">Logout</Nav.Link> */}
              {!isLoggedIn && <Nav.Link style={{color:"white"}}><Link to="/login" style={{ color: "white",textDecoration: 'none'}}>Login/Register</Link></Nav.Link>}
              {isLoggedIn && <Nav.Link style={{color:"white"}} onClick={clickHandler}>Logout</Nav.Link>}
              {/* <Nav.Link style={{color:"white"}} href="singleOfferedService">Service</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header