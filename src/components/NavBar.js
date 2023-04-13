import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar({ currentPage, handlePageChange }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Add event listener to window on component mount
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = (page) => {
    handlePageChange(page);
    setIsMobile(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#about" className='pl-3'>Marwin Manlangit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isMobile ? (
          <Nav className="mr-auto">
            <Nav.Link href="#about" onClick={() => handleMenuClick('About')}>About</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => handleMenuClick('Portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" onClick={() => handleMenuClick('Contact')}>Contact</Nav.Link>
            <Nav.Link href="#resume" onClick={() => handleMenuClick('Resume')}>Resume</Nav.Link>
          </Nav>
        ) : (
          <Nav className="justify-content-end">
            <Nav.Link href="#about" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('About')}>About Me</Nav.Link>
            <Nav.Link href="#portfolio" className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
            <Nav.Link href="#resume" className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
