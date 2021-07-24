import React from "react";

const Container = ({children, padding, height, maxHeight, className}) => {

  const styledComponent = {
    padding: padding && padding,
    minHeight: height && height,
    maxHeight: maxHeight && maxHeight,
  }

  return (
    <div className={"container" + (className ? " " + className : "")} style={styledComponent}>{children}</div>
  )

}
export default Container;