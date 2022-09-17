import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/styles/header.css'




function BasicExample({ currentPage, handlePageChange }) {
  return (
    <Navbar className='bgN' collapseOnSelect  expand="xl">
      
      <Container 
      
      className='wholeNav'>
        <Navbar
        
        className='headerTitle'  >Slush Trap</Navbar>
        <Navbar.Toggle className='outHeader' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='aboutHeader' id="basic-navbar-nav">
          <Nav className='homeAndAboutContainer'>
            <Nav.Link id='homeNav' href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} >Homee</Nav.Link>
            <Nav.Link className= 'aboutHeader'  href="#menu"
          onClick={() => handlePageChange('Menu')}
          >Menu</Nav.Link>
          <Nav.Link className='aboutHeader'  href="#gallery"
          onClick={() => handlePageChange('Gallery')}>Gallery</Nav.Link>
            
            {/* <Nav.Link className='aboutHeader'  href="#about"
          onClick={() => handlePageChange('About')}>About</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;