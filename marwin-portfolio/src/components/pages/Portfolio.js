import React from "react";
import { Card } from "react-bootstrap";
import geolocationImage from '../../images/Geolocation.png';
import passwordGenImage from '../../images/PasswordGen.png';
import schedulerImage from '../../images/Scheduler.png';
import carInventoryImage from '../../images/carInventory.png';

function Portfolio() {
  const portfolioItems = [
    {
      title: 'Geolocation App',
      description:
        'A geolocation-based weather app that displays the weather in your current location. Features a search function that allows you to search for weather in any city in the world. Built using the OpenWeather API.',
      image: geolocationImage,
      link: 'https://github.com/Marwaynemclovin/Media-and-News-Geolocation',
    },
    {
      title: 'Javascript Password Generator',
      description: 'A password generator app that allows you to generate strong, secure passwords for your online accounts. Includes a copy-to-clipboard feature for easy password management. Built using JavaScript.',
      image: passwordGenImage,
      link: 'https://github.com/Marwaynemclovin/Javascript-Password-Gen',
    },
    {
      title: 'Scheduler',
      description: 'A simple calendar app that allows you to schedule your work day. Features an intuitive interface for easy event management. Built using the Day.js library for date and time calculations.',
      image: schedulerImage,
      link: 'https://github.com/Marwaynemclovin/Day.js-Daily-Planner',
    },
    {
      title: 'Car Inventory Manager',
      description: 'A car inventory management app that allows you to keep track of your inventory of cars. Features an easy-to-use interface for adding, editing, and deleting car listings. Built using React and Firebase Realtime Database.',
      image: carInventoryImage,
      link: 'https://github.com/abewd/CarInventoryManager',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-3 fw-bold">Projects</h1>
      <p className="text-center">Click on the images or title to access the GitHub repository</p>
      <div className="row">
        {portfolioItems.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <Card className="h-100 border-dark">
              <a href={project.link} target="_blank" rel="noreferrer">
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ maxHeight: '250px' }}
                  className="img-fluid hover-zoom"
                />
              </a>
              <Card.Body>
                <a href={project.link} target="_blank" rel="noreferrer" className="link-dark">
                  <h4 className="text-center fw-bold hover-effect">{project.title}</h4>
                </a>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

