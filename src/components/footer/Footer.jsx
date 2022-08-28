import React from 'react'
import './footer.css'
import {SiDiscord} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PAUL CHAIGNEAU - PORTFOLIO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Témoignages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://discord.com/"><SiDiscord/></a>
        <a href="https://instagram.com/"><BsInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; pchaigneau.fr Tout droit réservé.</small>
      </div>
    </footer>
  )
}

export default Footer