import React from 'react';
import '../styles/button.css'

const Button = (props) => {
  return (
    <button 
      style={
        {backgroundColor:props.backgroundColor, 
        border:props.border, 
        color:props.color, 
        display:props.display}
      } 
    className='action_button' 
    onClick={props.onClick}
    >
      {props.text}

    </button>
  )
}

export default Button