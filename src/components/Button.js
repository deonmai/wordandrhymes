import React from 'react'

const Button = (props) => {
  return (
    <div className = {props.divName}>
      <button className = {props.class} onClick = {props.onClick}>
        <span className = {props.textClass}>{props.text}</span>
      </button>
    </div>
  );
}

Button.defaultProps = {
  class: 'btn',
  text: 'Let\'s go!',
  divName: 'btndiv',
  textClass: 'btntext'

}

export default Button
