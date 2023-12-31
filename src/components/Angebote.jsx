import { useState, useEffect } from 'react'
import './Angebote.scss'
import angebote from "../data/angebote.json"
import {motion} from "framer-motion"
import ModalAngebote from './ModalAngebote'
import Title from '../utils/Title'
import { Modal } from 'flowbite-react'


export default function Angebote() {
    const [seeOffer, setSeeOffer] = useState(0);
    const [offers, setOffers] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const title = "Unser Angebot"


    useEffect(() => {
      // Fetch offers data from JSON file or API
      fetch('/data/angebote.json') 
        .then((response) => response.json())
        .then((data) => setOffers(data))
        .catch((error) => console.error('Error fetching offers:', error));
    }, []);

    const meineAngebote = angebote.map(angebot => (
        <motion.div 
            className='angebot' 
            key={angebot.id}
            onClick={() => {
                setSeeOffer(angebot.id),
                setOpenModal(true)
            }}
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
            openModal={openModal}
            setOpenModal = {setOpenModal}
        />
    </section>
  )
}
