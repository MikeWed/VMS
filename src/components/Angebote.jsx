import { useState } from 'react'
import './Angebote.scss'
import angebote from "../data/angebote.json"
import {motion} from "framer-motion"
import ModalAngebote from './ModalAngebote'
import Title from '../utils/Title'


export default function Angebote() {
    const [seeOffer, setSeeOffer] = useState(0);
    // console.log(seeOffer)

    const title = "Unser Angebot"

    const meineAngebote = angebote.map(angebot => (
        <motion.div 
            className='angebot' 
            key={angebot.id}
            onClick={() => setSeeOffer(angebot.id)}
            whileHover={{scale: 1.05}}
            transition={{type: "spring", stiffness: 200, damping: 9}}
            whileInView={{
                opacity: 1,
                transition: {duration: 0.5,},
            }}
            initial= {{opacity: 0,}}

        >
            <div className='angebot-inner'>
                    <img src={angebot.img}/>
                    <p className='front-title'>{angebot.title}</p>
            </div>
        </motion.div>
    ))

  return (
    <section id='angebote'>
        {/* <h1 className='section-header'>Unser Angebot</h1> */}
        <Title text= {title}/>
        <div className="angebote-wrapper">
            {meineAngebote}
            <div className="angebot angebot-button">
                <a href='#contact' className='button'>Schreib uns</a>
            </div>
        </div>
        <ModalAngebote
            seeOffer= {seeOffer}
            setSeeOffer= {setSeeOffer}
        />
    </section>
  )
}
