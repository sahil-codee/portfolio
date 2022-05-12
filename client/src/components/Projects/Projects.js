import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tinder from "../../Assets/Projects/Tinder.gif";
import contacts from "../../Assets/Projects/contactcards.png";
import airbnb from "../../Assets/Projects/airbnb.png";
import todo from "../../Assets/Projects/todo.png";
import facebook from "../../Assets/Projects/fb.gif";
import meme from "../../Assets/Projects/meme.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tinder}
              isBlog={false}
              title="Tinder-Clone"
              description="A Tinder Clone application that you can use to right swipe and left swipe on people cards. We are storing each of the cards with image URL and name in our MongoDB No SQL Database. We have hosted our app backend on Heroku and Front End on Firebase."
              link="https://github.com/sahil-codee/tinder-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facebook}
              isBlog={false}
              title="Facebook-Clone"
              description="A Facebook Clone application that you can sign in with your Google Account and send realtime posts. We have used Context Api(Redux pattern) to push the login user inside the data layer to use in our components. We have hosted our app live on Firebase."
              link="https://github.com/sahil-codee/fb-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contacts}
              isBlog={false}
              title="Contact-Cards"
              description="It Fetches data from an API to display random contact cards. Also, you can select a specific card that will display detailed information for that selected card on top of the cards."
              link="https://sk-contact-cards.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo-App"
              description="Mern Stack Todo App, that let user to add a note, read a note and delete a note, we are storing todo data in MongoDB NO SQL DataBas."
              link="https://themerntodoapp.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="Meme-Generator"
              description="This is a random meme generator which will allow user to generate random memes every time when user will hit the button, also user can add custom top and bottom text to the meme for personal customization."
              link="https://github.com/sahil-codee/meme-generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Air-bnb Clone"
              description="Airbnb experience clone which displays unique interactive activities led by one-of-a-kind hosts also user can see the ratings and availability of the activities."
              link="https://github.com/sahil-codee/air-bnb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
