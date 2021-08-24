import React from 'react'

const Word = (props) => {
  return (
    <h1 className = {props.class}>{props.word}</h1>
  );
}

Word.defaultProps = {
  word: "FIRST",
  class: "wrd"
}


export default Word
