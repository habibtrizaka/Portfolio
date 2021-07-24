import React from 'react';

const Section = ({children, bgColor, bgImg, height, className, paddingBot, paddingTop}) => {

  const styledComponent = {
    backgroundColor: bgColor && bgColor,
    backgroundImage: bgImg && bgImg,
    minHeight: height && height,
    paddingTop: paddingTop && paddingTop,
    paddingBottom: paddingBot && paddingBot,
  }

  return (
    <section className={className && className} style={styledComponent}>
      {children}
    </section>
  )
}

export default Section;