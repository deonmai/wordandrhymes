import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const About = (props) => {
  return (
    <div className = 'abt'>
      <h2 style = {{ "textAlign": "left" }}>Welcome to my random word generator, built for the sole purpose of practising freestyle!!</h2>
      <p style = {{ "textAlign": "left" }}><br/>Simply click the button to generate a completely random word from the English dictionary, along with three complementary rhyming words to give you some inspiration. </p>
      <p style = {{ "textAlign": "left" }}><br/>Built with React JS and Node. Utilised the following packages and APIs: random-words, Datamuse API (Rhymezone), react-router-doms</p>
      <p style = {{ "textAlign": "left", "marginBottom": "100px" }}><a href = "https://www.youtube.com/watch?v=kRTNZGd5MSg" target="_blank" rel="noopener noreferrer" style = {{ "textDecoration": "none" }}><br/>Happy freestyling :)</a></p>

      <div style = {{ "marginBottom": "5%" }}>
        <label className ="container">Toggle Rhymes &emsp;
          <input type="checkbox" checked = {props.toggleRhymes} onChange = { props.onChange}></input>
          <span className ="checkmark"></span>
        </label>
      </div>

      <Link to = "/"> <Button divName = '' textClass = '' class = 'abtbtn' text = "RUN IT BACK!" onClick = { function(){} } /> </Link>
    </div>
  );
}

export default About
