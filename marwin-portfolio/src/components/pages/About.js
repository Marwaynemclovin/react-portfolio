import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../../images/profile.webp';

function About() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <img src={profile} alt='display' className="rounded-circle mx-auto d-block mb-4" style={{ height: '200px', width: '200px' }} />
          <h1 className="fw-bold text-center">About Me</h1>
          <p className="lead">Marwin Manlangit, an aspiring full-stack developer, is fueled by a passion for creating innovative solutions and applications. With a diverse background and keen interest in technology's impact on the world, Marwin is embarking on an exciting journey by enrolling in a full-stack development bootcamp at the prestigious University of Sydney. This rigorous program will equip him with the versatile skill set needed to excel in both front-end and back-end development.</p>
          <p className="lead">Throughout the bootcamp, Marwin will immerse himself in the comprehensive curriculum, covering a wide array of programming languages, frameworks, and tools. Leveraging the university's world-class resources and networking opportunities, he aims to establish a strong foundation in full-stack development that will propel him towards his dream career.</p>
          <p className="lead">Upon completion of the bootcamp, Marwin aspires to join a forward-thinking organization where he can contribute his skills and knowledge to tackle complex challenges and make a meaningful impact. With unwavering commitment to excellence and a future-focused mindset, Marwin Manlangit is poised to become a trailblazer in the realm of full-stack development.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
