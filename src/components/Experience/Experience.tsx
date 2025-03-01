import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function Experience() {
  return (
    <Container id="experience">
      <h2>My Experience</h2>
      <div className="experiences">

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <svg width="20" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
              <div className="experience-links">
                <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" width = "20" height = "20" />
                </a>
                <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" width = "20" height = "20" />
                </a>
              </div>
            </header>
            <div className="body">
              
              <h3>Serverless Voting Application for Programming Languages</h3>
              <p> Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency. </p>
              
            </div>
            <footer> 
              <ul className="tech-list"> 
                <li>AWS Lambda</li> 
                <li>API Gateway</li> 
                <li>DynamoDB</li> 
              </ul> 
            </footer>
          </div>
        </ScrollAnimation>
                <ScrollAnimation animateIn="flipInX">
                  <div className="experience">
                    <header>
                      <svg width="20" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                      <div className="experience-links">
                        <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                          <img src={externalLink} alt="Visit site" width = "20" height = "20"/>
                        </a>
                      </div>
                    </header>
                    <div className="body">
                      <h3>VeloCityAI</h3>
                      <p>
                        VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
                      </p>
                    </div>
                    <footer>
                      <ul className="tech-list">
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Html</li>
                        <li>css</li>
                      </ul>
                    </footer>
                  </div>
                </ScrollAnimation>
      
      </div>
    </Container>
  );
}
 
export default Experience