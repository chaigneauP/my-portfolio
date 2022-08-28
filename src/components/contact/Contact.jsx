import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiDiscord} from 'react-icons/si'
import {FaMobileAlt} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kp1pwhr', 'template_37oqh9n', form.current, 'uIarIlGMkeAf1S_Qe');
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Besoin d'échanger ?</h5>
      <h2>Me contacter</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>chaigneaupaul@gmail.com</h5>
            <a href='mailto:chaigneaupaul@gmail.com'>Envoyer un message</a>
          </article>
          <article className='contact__option'>
            <FaMobileAlt className='contact__option-icon'/>
            <h4>Téléphone</h4>
            <h5>06 21 81 15 30</h5>
            <a href='tel:+33621811530'>Envoyer un message</a>
          </article>
          <article className='contact__option'>
            <SiDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>Astran#6747</h5>
            <a href='https://discord.com/'>Envoyer un message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom' required/>
          <input type="email" name='email' placeholder='Votre e-mail' required/>
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer un message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact