import React from 'react'
import './Contact.scss'
import Title from '../utils/Title'
import horseContact from '../assets/horseGlasses.png'
import instagram from '../assets/insta.svg'
import facebook from '../assets/facebook.svg'

export default function Contact() {

    const title = "Kontakt"
    
  return (
    <section id='contact'>
        <Title text = {title}/>
        <div className="contact-container">
            <img id='horseContact' src={horseContact} alt="image horse" />

            <div className="wrapper-message">
                <div className='contact-message'>
                    <p>Egal, ob du eine allgemeine Frage, einen konreten Wunsch oder Interesse am Thema hast, kontaktiere uns gerne direkt, besuche uns auf Social Media oder hinterlasse uns hier eine Nachricht. </p>
                    <br />
                    <p>Tel: +49 123456789</p>
                    <p>info@gehMirNichtAufnSack.de</p>
                    <div className='contact-social'>
                        <a href="www.instagram.com"><img src={instagram} alt="" /></a>
                        <a href="www.facebook.com"><img src={facebook} alt="" /></a>
                    </div>
                </div>
                <form className='form-wrapper' action="">
                    <div className="form-container container-name">
                        <label htmlFor="name">Dein Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="form-container container-email">
                        <label htmlFor="name">Deine Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="form-container container-anliegen">
                        <label htmlFor="anliegen">Dein Begehr</label>
                        <textarea name="anliegen" id="anliegen" rows={8}/>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
