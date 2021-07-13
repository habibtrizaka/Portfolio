import React from "react";

const Container = ({children, paddings, height}) => {

  const styledComponent = {
    padding: paddings && paddings,
    minHeight: height && height,
  }
  
  return (
    <div className="container" style={styledComponent}>{children}</div>
  )
}
export default Container;