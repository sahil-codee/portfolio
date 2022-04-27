import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import react from "../../Assets/Projects/react.png";
import card from "../../Assets/Projects/card.png";
import airbnb from "../../Assets/Projects/airbnb.png";
import todo from "../../Assets/Projects/todo.png";
import destiny from "../../Assets/Projects/destiny.png";
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React-Page"
              description="This is a static page which is created using pure css and react.js."
              link="https://sahil-codee.github.io/react-page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={destiny}
              isBlog={false}
              title="Destiny"
              description="A destiny is a sign-up form UI created using React.js. User can signup  ."
              link="https://github.com/sahil-codee/destiny"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card}
              isBlog={false}
              title="Digital-Card"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/sahil-codee/digital-card"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
