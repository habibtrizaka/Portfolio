import React from "react";
import Container from "../components/Container";
import Ornament from "../components/Ornament";

const Home = (props) => {

  return (
    <div>
      <section className="section-hero">
      <Container>
        <Ornament/>
        <span style={{display:"flex",}}>
          <h1 className="line" style={{fontWeight: "100", marginRight: 50}}>I am </h1><h1 className="line">an interface</h1>
        </span>
        <h1 className="line" style={{fontWeight: "100"}}>designer.</h1>
      </Container>
    </section>
    <section>
      <Container>
        <Ornament/>
      </Container>
      
    </section>
    </div>
  )

}

export default Home;

