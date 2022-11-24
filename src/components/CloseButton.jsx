import React from 'react';
import '../styles/closeButton.css';

const CloseButton = (props) => {
  return (
    <button className ='close__button' onClick={props.onClick}>X</button>
  )
}

export default CloseButton