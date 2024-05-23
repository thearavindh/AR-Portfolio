import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="C\Depression Detection "
              description="The project's goal is to detect depression, offer solutions via Chabot interface,connect
              users with nearby doctors. It identifies signs, provides personalized advice, and ensures
              timely support for mental health concerns in AI-driven intervention"
              ghLink="https://github.com/thearavindh/Depression-Detection-Using-ML"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Flutter Chat App"
              description="Engineered a high-performance Flutter chat app leveraging Firebase backend, Provider state
              management, and Flutter's testing suite,facilitated seamless cross-platform messaging
              experience."
              ghLink="https://github.com/thearavindh/chat-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BRAHMASTRA -23 SYMPOSIUM WEBSITE "
              description="The website employs Bootstrap, React.js, Tailwind CSS and various frontend tools for dynamic functionality.
              It leverages React.js for interface development and Bootstrap for responsiveness, offering users
              an engaging experience with event updates."
              ghLink="https://github.com/thearavindh/Brahmastra--23"
              demoLink="https://chettinadtech.ac.in/brahmastra23/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Flutter Video Call App"
              description="Developed a Flutter video call app with Firebase backend, Provider state management, and Flutter's testing suite, enabling real-time cross-platform video and audio communication."
              ghLink="https://github.com/thearavindh/videocall-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chirag Health Chatbot"
              description="
              A mental health chatbot uses AI to engage in supportive conversations, offer coping strategies, analyze user emotions, and guide individuals to professional mental health resources, providing immediate, accessible assistance and information.."
              ghLink="https://github.com/thearavindh/Chirag"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
