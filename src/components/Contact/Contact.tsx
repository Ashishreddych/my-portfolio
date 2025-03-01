import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:achaduvu@asu.edu"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:achaduvu@asu.edu">achaduvu@asu.edu</a>
        </div>
        <div>
        <a href="tel:+1 480-9524881"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">+1 480-(952)4881</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}