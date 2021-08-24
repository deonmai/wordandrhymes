import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'

const Header = (props) => {
  return(
    <header className = {props.className}>
      <h1>
        Random Word and Rhymes by <span>Deon Mai</span>
        <a href = "https://www.linkedin.com/in/deonmai/" target="_blank" rel="noopener noreferrer">< SiLinkedin className = 'logos' /></a>
        <a href = "https://github.com/deonmai" target="_blank" rel="noopener noreferrer">< SiGithub className = 'logos' /></a>
      </h1>

    </header>
  );
}

export default Header
