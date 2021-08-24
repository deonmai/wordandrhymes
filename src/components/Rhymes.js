import React from 'react'

const Rhymes = (props) => {

  return(
    <h2 className = { props.class}>{props.rhymes.map((item, index) => {
      if(index !== props.rhymes.length - 1) {
        return <span key = {index}>{item}&emsp;</span>
      }
      return <span key = {index}>{item}</span>
    })}</h2>
  );
}

export default Rhymes
