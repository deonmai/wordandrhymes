import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p style = {{ "fontSize": "1.1vw" }}>Deon Mai 2021 | <Link to = "/about" style = {{ "color": "#FFBE45" }}>Settings</Link></p>
    </footer>
  );
}

export default Footer
