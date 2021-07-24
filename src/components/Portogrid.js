import React from 'react';
import Container from './Container';

const Portogrid = ({ children, img, type, reverse }) => {
  return (
    <Container className={"grid grid-porto" + (reverse ? " grid-reverse" : "")}>
      <div className="porto-label">
        {children}
      </div>
      <div className="porto-img" >
        <img className="img-mockup" src={"../../../img/"+img}/>
      </div>
    </Container>
  )
}

export default Portogrid;