import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sahil Bakshi </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I'm a B.Tech graduate in the field of Electronics and Communication Engineering from Maharshi Dayanand University. I'm seeking out for an internship or full time position as a Front End, Backend or full-stack Developer.
            <br />
            <br />
            When I'm not coding, I like to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Meditation & Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(74 174 130)" }}>
            "Read-Implement-Code REPEAT!"{" "}
          </p>
          <footer className="blockquote-footer">Sahil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
