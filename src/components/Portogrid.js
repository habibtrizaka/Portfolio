import React from 'react';
import Container from './Container';

const Portogrid = ({ children, img, type, reverse }) => {
  return (
    <Container className={"grid grid-porto" + (reverse ? " grid-reverse" : "")}>
      <div className={"porto-label" + (type ? " " + type : "")}>
        {children}
      </div>
      <div className="porto-img" >
        <div className="img-mockup" style={{backgroundImage:`url(../../../img/${img})`}}/>
      </div>
    </Container>
  )
}

export default Portogrid;