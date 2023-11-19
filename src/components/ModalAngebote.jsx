import React from 'react'
import { useRef, useEffect, useState } from 'react';
import "./ModalAngebote.scss"
import cross from '../assets/cross_icon.svg'
// import { Swiper, SwiperSlide} from 'swiper/react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import angebote from "../data/angebote.json"
import {motion } from "framer-motion"
import { Modal } from 'flowbite-react';




export default function ModalAngebote({
    seeOffer,
    setSeeOffer,
    openModal,
    setOpenModal
}) {

    const swiperRef = useRef(null);

   
    useEffect(() => { 

        setTimeout(() => {
            if (swiperRef.current) {
              swiperRef.current.swiper.slideTo(seeOffer - 1,0);
            }
        }, 0);

    }, [seeOffer, swiperRef]);


    // const [swiperRef, setSwiperRef] = useState(null);

    // useEffect(() => {
    //   if (swiperRef) {
    //     swiperRef.swiper.slideTo(seeOffer - 1);
    //   }
    // }, [seeOffer, swiperRef]);

    const meineAngebote = angebote.map(angebot => (
        <swiper-slide 
            key={angebot.id} 
            style={{display: "flex", flexDirection: "column", height: "100%"}} 
        >
                <img src={angebot.img} alt="" />
                <h3>{angebot.title}</h3>
                <p>{angebot.content}</p>
        </swiper-slide>
    ))


    return (

        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} style={{zIndex: "100"}}>

        <motion.div className='modalAngeboteWrapper'
            style={seeOffer > 0 ? {display: "flex"} : {display: "none"}}
        >
            <motion.div 
                className='modalAngeboteCard'
                id='angeboteCard'
                initial={{scale: 0}}
                animate={seeOffer > 0 ? {scale : 1} : {scale : 0}}
            >
                <img src={cross} className='modal-cross' 
                    onClick={(e) => {
                        setSeeOffer(0),
                        setOpenModal(false)
                    }}
                />
                    <swiper-container
                        ref={swiperRef}
                        auto-height= "false"        
                        oberserver= "true"                
                        observeParents="true"
                        slides-per-view="1"
                        navigation="true"
                        pagination="false"
                        // pagination-clickable="true"
                        // space-between= "50"
                        loop= "true"
                        style= {{height: "100%"}}
                    >
                        {meineAngebote}
                    </swiper-container>

            </motion.div>
        </motion.div>
        </Modal>
    )
}

