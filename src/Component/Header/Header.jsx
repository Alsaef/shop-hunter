// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <div >
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Phone Hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <button className='btn'>  <ActiveLink  to="/">Iphone</ActiveLink></button>
           <button  className='btn'><ActiveLink  to='samsang'>Sumsang</ActiveLink></button>
          <button  className='btn'> <ActiveLink to='oppo'>Oppo</ActiveLink></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Header;