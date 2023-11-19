import React from 'react'
import { useRef, useEffect } from 'react';
import "./ModalAngebote.scss"
import cross from '../assets/cross_icon.svg'
// import { Swiper, SwiperSlide} from 'swiper/react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import angebote from "../data/angebote.json"
import {motion } from "framer-motion"




export default function ModalAngebote({
    seeOffer,
    setSeeOffer
}) {

    const swiperRef = useRef(null);

   
    useEffect(() => { 

        swiperRef.current.swiper.slideTo(seeOffer - 1);

    }, [seeOffer, swiperRef]);


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
        <motion.div className='modalAngeboteWrapper'
            style={seeOffer > 0 ? {display: "flex"} : {display: "none"}}
        >
            <motion.div 
                className='modalAngeboteCard'
                id='angeboteCard'
                initial={{scale: 0}}
                animate={seeOffer > 0 ? {scale : 1} : {scale : 0}}
            >
                <img src={cross} className='modal-cross' onClick={() => setSeeOffer(0)}/>
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
    )
}

<div className="modalAngeboteWrapper">
    <div className="modalAngeboteCard">

    </div>
</div>