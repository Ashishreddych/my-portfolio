import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Experience } from "../Experience/Experience";
import { Project } from "../Project/Project";
import { Contact } from "../Contact/Contact";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: "#bbbbbb",
            },
            links: {
              color: "#888888",
              distance: 120,
              enable: true,
              opacity: 1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          background: {
            color: "#0a0a0a",
            image: "linear-gradient(to right, #1f1f1f, #0a0a0a)",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </Container>
  );
}
