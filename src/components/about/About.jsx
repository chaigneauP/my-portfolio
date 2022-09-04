import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {MdSchool, MdWork} from 'react-icons/md'

const about = () => {
  return (
    <section id="about">
      <h5>Apprenez à</h5>
      <h2>Me connaître</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expérience</h5>
              <small>3 ans d'expérience en alternance</small>
            </article>
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Diplôme</h5>
              <small>Master 2 Expert Informatique et Systèmes d'Information</small>
            </article>
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Situation professionnelle</h5>
              <small>Développeur chez ASI</small>
            </article>
          </div>
          <p>
          Je m'appelle Paul Chaigneau, développeur à plein temps je travail pour une société su secteur numérique. 
          Récement sorti d'école je réalise des petits projets personnels afin d'élargir mes compétences et de mettre mes nouvelles connaissances en pratique sur mes travaux.
          Ce que j'aime le plus ? Découvrir de nouvelles choses, essayer, innover et m'épanouir sur des sujets qui me tiennent à coeur.
        </p>

        <a href="#contact" className='btn btn-primary'> Discutons !</a>
        </div>
      </div>
    </section>
  );
}

export default about