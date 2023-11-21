import React from 'react'
import { useRef, useEffect, useState } from 'react';
import "./ModalAngebote.scss"
import cross from '../assets/cross_icon.svg'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import angebote from "../data/angebote.json"
import {motion } from "framer-motion"
import 'swiper/swiper-bundle.css';
import Modal from '@mui/material/Modal';



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


    const meineAngebote = angebote.map(angebot => (
        <swiper-slide 
            key={angebot.id} 
            // style={{display: "flex", flexDirection: "column", height: "100%"}} 
        >
                <img src={angebot.img} alt="" />
                <div className='inslide-container'>
                <h3>{angebot.title}</h3>
                <p>{angebot.content}</p>

                </div>
        </swiper-slide>
    ))


    return (
        <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                // style={{maxHeight: "200vh"}}
            >
            <div 
                className='modalAngeboteCard'
                id='angeboteCard'
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
                        keyboard-enabled="true"
                        loop= "true"
                        style= {{height: "100%"}}
                        mousewheel = "true"                        
                    >
                        {meineAngebote}
                    </swiper-container>
            </div>
        </Modal>
    )
}

