import React from 'react';
import { Card } from 'react-bootstrap';
import resume from '../../assets/resume.pdf';

function Resume() {
  return (
    <div className="container">
      <h1 className="my-4 text-center mt-3 fw-bold mb-3">Resume</h1>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <Card>
            <Card.Header className="text-center fw-bold">Front-End Proficiencies</Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Handlebars</li>
                <li>React</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <Card>
            <Card.Header className="text-center fw-bold">Back-End Proficiencies</Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>IndexedDB</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <Card>
            <Card.Header className="text-center fw-bold">Other Proficiencies</Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li>APIs</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Service Workers</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="text-center mb-3">
        <a href={resume} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
