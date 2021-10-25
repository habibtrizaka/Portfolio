import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Ornament from "../components/Ornament";
import Portogrid from "../components/Portogrid";
import Section from "../components/Section";

const Home = (props) => {

  return (
    <div>
      <Section className="hero" >
        <Container height="100vh">
          <div style={{ position: "absolute", bottom: "20%" }}>
            <Ornament />
            <div className="flex">
              <h1 className="line" style={{ fontWeight: "100", marginRight: 50, color: "#2b2b2b" }}>I am </h1><h1 className="line">an interface</h1>
            </div>
            <h1 className="line" style={{ fontWeight: "100" }}>designer.</h1>
          </div>
        </Container>
      </Section>

      <Section bgColor="#2B2B2B" paddingBot="193px" paddingTop="143px">
        <Container>
          <div className="flex" style={{ alignItems: "baseline", columnGap: "55px" }}>
            <h2 style={{ color: "#56DF58" }}>introducing me</h2>
            <Ornament color="white" />
          </div>
          <p style={{color: "white"}}>Hi, mate! Meet me, a design geek who found Norman Door interesting. Good to see you!</p>
          <Button color="white" size="lg" label="See Resume" />
        </Container>
      </Section>

      <Section paddingTop="185px" paddingBot="185px">

        <Portogrid reverse={false} img="restabili.png">
          <h3>Stay sane with Restabili, your mental health care taker.</h3>
          <a href="https://www.behance.net/gallery/129478525/Restabili-Mental-Health-Support-App/" rel="noreferrer" target="_blank">
            <Button size="sm" color="#2b2b2b" label="Take a look" />
          </a>    
        </Portogrid>
        <Portogrid reverse={true} img="mockup1.png">
          <h3>Easly consult with doctor using Telemedicine</h3>
          <a href="https://www.behance.net/gallery/129478525/Restabili-Mental-Health-Support-App/" rel="noreferrer" target="_blank">
            <Button size="sm" color="#2b2b2b" label="Take a look" />
          </a>          
        </Portogrid>
        <Portogrid reverse={false} img="mockup1.png">
          <h3>Stay sane with Restabili, your mental health care taker.</h3>
          <a href="https://www.behance.net/gallery/129478525/Restabili-Mental-Health-Support-App/" rel="noreferrer" target="_blank">
            <Button size="sm" color="#2b2b2b" label="Take a look" />
          </a>    
        </Portogrid>
      </Section>
    </div>
  )

}

export default Home;

