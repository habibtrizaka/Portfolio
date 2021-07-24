import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Ornament from "../components/Ornament";
import Portogrid from "../components/Portogrid";
import Section from "../components/Section";

const Home = (props) => {

  return (
    <div>
      <Section className="section-hero" >
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

        <Portogrid reverse={false} img="mockup1.png">
          <h3>Easly book and monitor your carwash.</h3>
          <Button size="sm" color="#2b2b2b" label="Take a look" />
        </Portogrid>
        <Portogrid reverse={true} img="mockup1.png">
          <h3>Monitor your member activities using AMS.</h3>
          <Button size="sm" color="#2b2b2b" label="Take a look" />
        </Portogrid>
      </Section>
    </div>
  )

}

export default Home;

