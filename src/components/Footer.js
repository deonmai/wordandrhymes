import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p style = {{ "fontSize": "18px" }}>Deon Mai 2021 | <Link to = "/about" style = {{ "color": "#FFBE45" }}>About</Link></p>
    </footer>
  );
}

export default Footer
