import React from 'react';

const Button = ({label, color, size}) => {
  return (
    <button className={"btn " + (size && "btn-" + size)} style={{color:color}}>
      {label}
    </button>
  )
}

export default Button;